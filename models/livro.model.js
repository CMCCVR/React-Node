

const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    id: {type: String}, 
    title: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    capa: {type: String},
    Price: {type: Number},
});


const livros = mongoose.model('livros', livroSchema);

module.exports = livros; 

