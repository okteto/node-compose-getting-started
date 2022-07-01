const express = require('express');
const db = require("./models");
const movies = require("./routes/movie.routes.js");
const app = express();
app.use(express.json());
db.sequelize.sync();

app.use('/', movies);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Starting movies server...');
})