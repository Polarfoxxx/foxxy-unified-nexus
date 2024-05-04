const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hľadanie používateľa 
        const user = await User.findOne({ username });
        setTimeout(() => {
            // Kontrola existencie používateľa 
            if (user) {
                // Hashovanie hesla pomocou crypto
                const hash = crypto.createHash('sha256').update(password).digest('hex');
                if (hash === user.password) {
                    // Generovanie JWT s časovou expiráciou
                    const token = jwt.sign({ username }, "secret", { expiresIn: "2h" });
                    const theme = user.custom.theme
                    res.status(200).json({ username, token,theme });
                } else {
                    res.status(401).json({ message: "Incorrect password" });
                }
            } else {
                res.status(401).json({ message: "The user does not exist" });
            }
        }, 4000)

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
