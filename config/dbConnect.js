const mongoose = require('mongoose');

// Com a importação do modulo externo do mongoose, podemos chamar a partir da variável
// mongoose o metodo connect() que recebe como parametro a string de conexão do banco
// neste caso, o Mongo Atlas

// mongoose.connect('mongodb+srv://cmccvr:CMccvr@cluster0.eczeery.mongodb.net/mondodb');

const url = 'mongodb://localhost:27017/mondodb'

mongoose.connect(url)


// a variavel db recebe a conexão do banco e vamos exporta-la 
const db = mongoose.connection

// exporta a conexão com o mongo (atlas ou local, dependendo da string de conexão)
module.exports = db


