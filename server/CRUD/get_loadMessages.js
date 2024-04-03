

const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.get('/messages', async (req, res) => {
    const { userName } = req.query
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            const data = user.data.messages
            return res.status(201).json({ message: data })
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;