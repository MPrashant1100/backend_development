const express = require("express")
const app = express()

app.get('/' , (req , res)  => {
    res.send("Hi")
    console.log("Wow created own server")
    
})

const userRouter = require('./routes/user.js')
app.use('/user' , userRouter)

app.listen(3000)