const express = require("express");
const userDataRouter = express.Router();

const usersDatabase = [
  {
    id: 1,
    name: "Prashant",
    profession: "Software Engineer",
    gender: "Male",
    faith: "Hindu",
    address: "LMP",
    age: 26,
  },
  {
    id: 2,
    name: "Sachin",
    profession: "Senior Software Engineer",
    gender: "Male",
    faith: "Hindu",
    address: "LMP",
    age: 25,
  },
  {
    id: 3,
    name: "Anurag",
    profession: "Content Creator",
    gender: "Male",
    faith: "Hindu",
    address: "LMP",
    age: 22,
  },
];

userDataRouter.get('/', (req, res) => {
  res.status(200).json(usersDatabase)
});


module.exports = userDataRouter;