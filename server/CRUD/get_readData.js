const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.get('/data', async (req, res) => {
    const { userName } = req.query
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            const events = user.data.events;
            const messages = user.data.messages;
            return res.status(201).json({
                events: events,
                message: messages,
            })
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;