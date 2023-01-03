const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./Routes/index");
const db = require("./config/dbConnect.js");
// db.on('error', console.log.bind(console, 'Erro ao conectar com o banco!')
db.once("open", () => {
  console.log("Conexão realizada com sucesso!");
});
app.use(cors())
routes(app);
// const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 5000;

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

//uri
app.get("/", (req, res) => {
  res.json({ nome: "Carlos Miguel!" });
});

app.listen(port, hostname, () => console.log(`http://${hostname}:${port}`));
