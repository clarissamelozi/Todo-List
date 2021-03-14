const db = require("../models");
const Todo = db.todos;


exports.create = (req, res) => {
    if (!req.body.todoText) {
        res.status(400).send({ message: "O campo não pode estar vazio" });
        return;
      }
    
      const todo = new Todo({
        todoText: req.body.todoText
      });
  
      todo
        .save(todo)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro adicionar o item"
          });
        });
  };

exports.findAll = (req, res) => {
  const todoText = req.query.todoText;
  var condition = todoText ? { todoText: { $regex: new RegExp(todoText), $options: "i" } } : {};

  Todo.find(condition)
    .then(data => {
       res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error ocurred"
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Não foi possível deletar o item com id=${id}.`
      });
    } else {
      res.send({
        message: "O item foi deletado"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Não foi posssivel deletar o item de id=" + id
    });
  });
};
  