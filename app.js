const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRouter = require('./routes/todo')

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/local-dev", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected")
})

app.use('/todo', todoRouter)

app.listen(port);
