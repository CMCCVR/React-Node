const { models } = require("mongoose");
const livros = require("../models/livro.model");

class LivroController {
  // static posso chamar esse metodo somente no
  static findAll = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };
  static findById = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (err, livros) => {
      if (err) {
        res
          .status(404)
          .send({ message: "Livro não encontrqado", error: err.message });
      } else {
        res.status(200).json(livros);
      }
    });
  };
  static createBook = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao salvar o livro", error: err.message });
      } else {
        res.status(201).send(livros.t);
      }
    });
  };
  static deleteById = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err, livros) => {
      if (err) {
        res.status(404).send({ message: "Erro ao excluir", error: err.message });
      } else {
        res.status(200).send();
      }
    });
  };
  static updateById = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

module.exports = LivroController;
