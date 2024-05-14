const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");

router.post("/user", async (req, res) => {
    try {
        // Hľadanie používateľa 
        const user = await User.findOne({ username });
        // Kontrola existencie používateľa 
        if (user) {
            user.login.state = false;
            user.save()
            res.status(200).send('logout');

        } else {
            res.status(401).json({ message: "The user does not exist" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
