const express = require("express");
const router = express.Router();

// Import model here
const User = require('../database/models/User')
// Createw API here
router.post("/", async (req, res) => {
    try{
        const { name, profession } = req.body
        console.log('name')
        const user = new User ({ name, profession })
        const saveUser = await user.save()
        res.status(201).json(saveUser)
    } catch (error) {
        res.status(500).json({ error: "Error creating user", message: error.message })
    }
})
module.exports = router;
