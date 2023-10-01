const express =require("express")
const router = express.Router()


router.get('/' , (req , res)  => {
    res.send("This is user")
    console.log("Wow create own server")
   
})

module.exports = router;