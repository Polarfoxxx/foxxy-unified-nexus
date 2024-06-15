const express = require("express");
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());  // Middleware pro práci s cookies

router.get('/update_Cookie', (req, res) => {
  try {
    const { theme } = req.query;
    const myCookie = req.cookies;
    const cookieName = Object.keys(myCookie)[0];

    if (!cookieName || !myCookie[cookieName]) {
      return res.status(400).send('Cookie not found');
    }

    const parseValue = JSON.parse(myCookie[cookieName]);
    const token = parseValue.token;

    const updatedCookie = {
      token: token,
      colorTheme: theme
    };

    const cookieValue = JSON.stringify(updatedCookie);

    res.cookie(cookieName, cookieValue, {
      httpOnly: true,
      sameSite: 'strict'
    });

    res.status(200).send('Cookie updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error parsing and extracting cookie values');
  }
});

module.exports = router;
