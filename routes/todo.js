const express = require("express");
const router = express.Router();

// Import your Todo model (assuming it's defined in another file)
const Todo = require("../database/models/Todo");

// Create a new Todo item
router.post("/", async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    console.log(title)
    const todo = new Todo({ title, description, completed });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Error creating todo", message: error.message });
  }
});

// Get all Todo items
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving todos" });
  }
});

// Get a Todo Item by ID
router.get("/:id", async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id)
    if(!todos) {
      res.status(404).json({error: "Todo not Found"})
    }
    res.status(201).json(todos)
  } catch(error) {
    console.error('Data not found ')
    res.status(500).json({error: "Error retrieving todos"})
  }
})
// Export the router to use in your main Express app
module.exports = router;



