const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post("/user", async (req, res) => {
    const { usernames, password } = req.body;
        
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: usernames });
        /* kontrola existencie uzivatela*/
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                // Generovanie JWT s časovou expiráciou
                const token = jwt.sign({ usernames }, "secret", { expiresIn: "2h" });
                const returned_theme = user.custom.theme
                res.status(200).json({ usernames, token, returned_theme });
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
