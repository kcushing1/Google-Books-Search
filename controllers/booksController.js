// books/ GET returns all saved
// books / POST adds a saved
// books:id DELETE using mongo _id
const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book.find()
      .then((found) => res.json(found))
      .catch((err) => console.log(err));
  },
  save: (req, res) => {
    db.Book.create(req.body)
      .then((book) => res.json(book))
      .catch((err) => console.log(err));
  },
  delete: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((found) => found.remove())
      .then((book) => res.json(book))
      .catch((err) => console.log(err));
  },
};
