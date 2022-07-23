const express = require('express')
const ControllerXML2Json = require('./controllers/ControllerXML2Json')

//const data = require('./data/data.json')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))

route.get('/json', (req, res) => res.render('json'))

route.post('/convert', ControllerXML2Json.convert)

// route.post('/teste', (req, res) => {
//     return res.send(data)
// })

module.exports = route 