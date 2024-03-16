const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.post('/data', async (req, res) => {
    const { userName, save_Data } = req.body;

    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: userName });

        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            user.custom = save_Data.custom
            // Uloženie aktualizovaného používateľa do databázy
            await user.save();
            res.status(201).json({ message: "Route saved" });
        }
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;