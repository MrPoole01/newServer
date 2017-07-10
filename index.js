var express = require('express')
var server = express()
var rick = require('./rick/rick.json')

server.get('/', function (request, response) {
  response.send("Go to /rick to find out more about me")
})

server.get('/rick', function (request, response) {
  response.json(rick)
})

server.get('/about', function (request, response) {
  response.send("This is all about me!!")
})

server.use(function (request, response) {
  response.status(404)
  response.send("UHH, NUHHH!")
})

server.listen(8080)
