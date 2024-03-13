const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const Joi = require("joi");

router.post('/newUser', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Skontrolujte, či používateľ už neexistuje
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User existing' });
        } else {
            // Hashovanie hesla
            const validateUser = Joi.object({
                username: Joi.string().min(3).required(),
                password: Joi.string().min(4).required(),
            });

            const validation = validateUser.validate({ username, password });
            if (validation.error) {
                res.status(400).json({ message: "Registration error" });
            } else {
                // Vytvorte nového používateľa
                const newUser = {
                    username: username,
                    password: password,
                    custom: {
                        theme: ""
                    },
                    data: {
                        events: [],
                        messages: [],
                    }
                };

                User.create(newUser)
                    .then(() => {
                        res.status(201).json({ message: "Registration sucesfull" });
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).json({ message: "Registration error" });
                    });
            };
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration error" });
    };
});

module.exports = router;