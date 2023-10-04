const express = require("express")
const userRouter = require('./routes/user.js')
const dataRouter = require('./routes/database.js')
const app = express()
const port = process.env.PORT || 3000



app.use('/user' , userRouter)
app.use('/database' , dataRouter)

app.listen(port)