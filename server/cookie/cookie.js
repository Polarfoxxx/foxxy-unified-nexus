const express = require("express");
const router = express.Router();
const verifyJWTToken = require("./services/services_JWTexpired");

// Route to set a cookie
router.get('/set-cookie', (req, res) => {
  try {
    const cookie = req.cookies.foxxy;
    if (!cookie) {
      throw new Error('Cookie "foxxy" is not defined');
    }
    const cookieExp = verifyJWTToken(cookie)
    res.send(cookieExp);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error parsing and extracting cookie values');
  }
});

module.exports = router;
