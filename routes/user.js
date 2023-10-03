const express = require("express")
const router = express.Router()


router.get('/' , (req , res)  => {
    res.status(200).json({
        status: true,
        message: "API Running"
    })
    console.log("Wow create own server")
   
})

module.exports = router;