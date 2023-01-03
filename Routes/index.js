const express = require("express");
const livros = require("./livroRoutes");

const routes = (app) => {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(express.json(), livros);
 
};

module.exports = routes;
