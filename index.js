const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Desafio - criar endpoint /oi que exibe "Olá Mundo"
app.get('/oi', function (rq, res){
  res.send("Olá Mundo")
})

//Lista de personagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

//Read All - [GET] /item
app.get('/item', function (req, res) {
//Pegamos a lista e enviamos como resposta HTTP
res.send(lista)
})

// Sinalizamos para o Express que vamos usar JSON no Body
app.use(express.json())

// Create - [POST] /item
app.post('/item', function (req, res) {
})
app.listen(3000)
