const express = require("express");
const router = express.Router();
const verifyJWTToken = require("./services/services_JWTexpired");

// Route to set a cookie
router.get('/read_Exp_Existing_Cookie', (req, res) => {
  try {
    const myCookie = req.cookies;
    const cookieName = Object.keys(myCookie)[0];
    if (!cookieName) {
      res.send({
        valid: false,
        error: "no token"
      })
    } else {
      const parseValue = JSON.parse(myCookie[cookieName]); // Nastavíme hodnotu tokenu na prázdný řetězec
      const token = parseValue.token;
      const theme = parseValue.colorTheme;
      const cookieExp = verifyJWTToken(token)
      // Vytvorenie objektu s hodnotami, ktoré chcete poslať
      if(!cookieExp.valid) {
        req.url = '/logOut/user';
        req.method = 'POST'; // Assuming logout route requires a POST request
        router.handle(req, res);
      }
      const responseData = {
        cookieExp: cookieExp,
        theme: theme,
        userName: cookieName
      };
      // Poslanie odpovede s objektom responseData
      res.send(responseData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error parsing and extracting cookie values');
  }
});

module.exports = router;
