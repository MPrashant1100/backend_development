const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require('./routes/user')
const app = express()

app.use(bodyParser.json())
const port = process.env.PORT || 3000

mongoose.connect("mongodb://127.0.0.1.27017", {
  useNewUrlParser: true,
  useUnifiedTopoloy: true,
}).then(()=> {
  console.log("MongoDB connected succefully")
})

app.use('/user', router)
app.listen(port)
