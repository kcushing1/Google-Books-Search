const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/", booksController.findAll);
router.route("/", booksController.findAll);
router.route("/:id", booksController.delete);

module.exports = router;
