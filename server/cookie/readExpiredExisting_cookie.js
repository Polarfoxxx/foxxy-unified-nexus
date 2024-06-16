const express = require("express");
const router = express.Router();
const verifyJWTToken = require("./services/services_JWTexpired");



router.get('/read_Exp_Existing_Cookie', (req, res) => {
  const myCookie = req.cookies;

  try {
    //! existing cookie ?
    const cookieName = Object.keys(myCookie)[0];
    if (!cookieName) {
      return res.status(400).json({ valid: false, error: "no cookie" });
    }

    //! existing token ?
    const parseValue = JSON.parse(myCookie[cookieName]);
    const { token, colorTheme } = parseValue;
    if (!token) {
      return res.status(400).json({ valid: false, error: "no token" });
    }

    //! validity token ?
    const cookieExp = verifyJWTToken(token);

    const responseData = {
      cookieExp,
      theme: colorTheme,
      userName: cookieName
    };

    // Set the cookie with SameSite and Secure attributes
    res.cookie(cookieName, JSON.stringify(parseValue), {
      httpOnly: true,
      secure: true, // Ensure the cookie is only sent over HTTPS
      sameSite: 'None',
    });

    res.json(responseData);
  } catch (err) {
    res.status(500).send('Error parsing and extracting cookie values');
  }
});
module.exports = router;
