const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const Joi = require("joi");
const bcrypt = require("bcrypt");


router.post('/newUser', async (req, res) => {
  const {username , password} = req.body;
    try {
        // Hashovanie hesla
      const hashedPassword = await bcrypt.hash(password, 10);
        const validateUser = Joi.object({
            username: Joi.string().min(3).required(),
            password: Joi.string().min(4).required(),
        });
        const validation = validateUser.validate({ username, password });
        if (validation.error) {
            return res.status(400).json({ message: "Registration error" });
        }

        // Vytvorte nového používateľa
        const newUser = {
            username: username,
            password: hashedPassword,
            custom: {
                theme: ""
            },
            data: {
                events: [],
                messages: [],
            }
        };

        await User.create(newUser);
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration error" });
    }
});

module.exports = router;
