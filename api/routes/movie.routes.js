var express = require('express')
var router = express.Router()
var movies = require("../controllers/movie.controller.js");
router.post("/api", movies.create);
router.get("/api", movies.findAll);

module.exports = router;