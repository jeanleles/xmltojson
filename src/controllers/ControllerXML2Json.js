//const { json } = require('body-parser')
const fs = require('fs')
const xml2js = require('xml2js')


let jsonString

async function xml2json() {
    try {
        const xml = fs.readFileSync('src/data/dataset.xml')
        const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true })
        jsonString = JSON.stringify(result, null, 4)
        //console.log(json)
        fs.writeFileSync('./public/data/result.json', jsonString)
        //return jsonString
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    convert(req, res) {
        let xmlFile = req.files.fileXML

        xmlFile.mv('src/data/dataset.xml', function (err) {
            if (err) {
                return res.status(500).send(err)
            } else {
                xml2json()
            }
        })

        res.redirect('/json')
    }
}