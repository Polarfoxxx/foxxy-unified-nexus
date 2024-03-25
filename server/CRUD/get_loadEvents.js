

const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.get('/data', async (req, res) => {
    const { userName } = req.query
    console.log(userName);
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            const data = user.data.events
            return res.status(201).json({ message: data })
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;