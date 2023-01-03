const express = require('express')
const LivroController = require('../controllers/LivroController')
const routes = express.Router()

    routes
        .get('/books', LivroController.findAll)
        .get('/book/:id', LivroController.findById)
        .post('/book', LivroController.createBook)


module.exports = routes;