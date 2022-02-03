var express = require('express')
var router = express.Router()
var movies = require("../controllers/movie.controller.js");
router.post("/", movies.create);
router.get("/", movies.findAll);

module.exports = router;