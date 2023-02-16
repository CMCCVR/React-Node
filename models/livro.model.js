

const mongoose = require('mongoose');

// Criar o Schema da entidade no Mongo
const livroSchema = new mongoose.Schema({
    id: {type: String}, 
    title: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    capa: {type: String},
    Price: {type: Number},
});

// Se a colection não for criada la no mongo, nesse momento ele é criada automaticamente
const livros = mongoose.model('livros', livroSchema);

module.exports = livros; 

