const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB")
const jwt = require("jsonwebtoken");

router.post("/user", async (req, res) => {
    const { usernames, password } = req.body;
        
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: usernames });
        /* kontrola existencie uzivatela*/
        if (user) {
            if (user.password === password) {
                // Generovanie JWT s časovou expiráciou
                const token = jwt.sign({ usernames }, "secret", { expiresIn: "2h" });
                res.status(200).json({ usernames, token });
            } else {
                res.status(401).json({ message: "Incorrect password" });
            };
        } else {
            res.status(401).json({ message: "The user does not exist" });
        };
    } catch
    (error) {
        res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;
