// CONFIGURACAO DE BANCO DE DADOS

const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/todo'

mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose
