const express = require("express");
const router = express.Router();

// Route to set a cookie
router.get('/update_Cookie', (req, res) => {
  try {
    const request_update = req.query;
    const color = request_update.theme;
    const myCookie = req.cookies;
    const cookieName = Object.keys(myCookie)[0];
    
    // Získanie hodnôt tokenu a farby témy z cookies
    const parseValue = JSON.parse(myCookie[cookieName]);
    const token = parseValue.token;
    const theme = parseValue.colorTheme;
     
    // Aktualizácia farby témy
    const updatedCookie = {
      token: token,
      colorTheme: color
    }

    // Serializácia aktualizovaných údajov do JSON reťazca
    const cookieValue = JSON.stringify(updatedCookie);

    // Nastavenie aktualizovaných cookies späť v odpovedi
    res.cookie(cookieName, cookieValue);

    // Odpoveď s potvrdením aktualizácie
    res.status(200).send('Cookie updated successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error parsing and extracting cookie values');
  }
});

module.exports = router;
