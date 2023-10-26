const mongoose = require("mongoose");

// Define a schema for the Todo item
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
