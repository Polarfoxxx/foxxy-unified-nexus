const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB")


router.post("/user", async (req, res) => {
    const { username, password } = req.body;

    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username });
        /* kontrola existencie uzivatela*/
        if (user) {
            if (user.password === password) {
                const status = "log"
                // Generovanie JWT s časovou expiráciou
                res.status(200).json({ user, username, status });
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