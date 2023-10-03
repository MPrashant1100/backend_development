const express = require("express")
const userRouter = require('./routes/user.js')
const app = express()

app.get('/' , (req , res)  => {
    res.send("Hi")
    console.log("Wow created own server")
    
})
console.log("Wow created own server")

app.use('/user' , userRouter)

const port = process.env.PORT || 3000
app.listen(port)