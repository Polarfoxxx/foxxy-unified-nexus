const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.post('/data', async (req, res) => {
    const { userName, save_Data } = req.body;
    console.log(save_Data);
    try {
        /* hladanie uzivatela*/
        const user = await User.findOne({ username: userName });

        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            if (save_Data.event) {
                user.data.events.push(save_Data.event);
                await user.save();
                res.status(201).json({ message: "event saved" });
            } else if (save_Data.custom) {
                user.custom = save_Data.custom
                await user.save();
                res.status(201).json({ message: "theme saved" });
            } else if (save_Data.message) {
                user.data.messages.push(save_Data.message);
                await user.save();
                res.status(201).json({ message: "message saved" });
            } else {
                res.status(500).send('Internal Server Error');
            };
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;