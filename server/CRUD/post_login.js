const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
        
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Incorrect username or password" });
        }

        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        if (hashedPassword !== user.password) {
            return res.status(401).json({ message: "Incorrect username or password" });
        }

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "2h" });
        const returnedTheme = user.custom.theme;
        const userName = user.username;
        res.status(200).json({ userName, token, returnedTheme });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
