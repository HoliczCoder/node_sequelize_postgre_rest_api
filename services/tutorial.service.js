const db = require("../models");
const Tutorial = db.tutorials;
exports.create = (req, res) => {
  // validate request
  console.log(req.body.published);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //create a tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  //save tutorial in the database
  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: e.message,
      });
    });
};

exports.hihi = (req, res) => {
  // validate request
  if (req.content.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //create a tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  //save tutorial in the database
};
