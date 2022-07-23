const express = require('express')
const route = require('./route')
const path = require('path')
const fileUpload = require('express-fileupload')
const fs = require('fs')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.use(fileUpload())

server.use(express.json())

server.set('views', path.join(__dirname, 'views'))

//Midleware, decodifica a req e passa para o controller
server.use(express.urlencoded({ extended: true }))

server.use(route)

 server.listen(3000, () => console.log('Server running on port 3000! 😍'))
