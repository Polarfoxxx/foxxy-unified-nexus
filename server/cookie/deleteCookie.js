const express = require("express");
const router = express.Router();

router.use('/clear-cookie', (req, res) => {
    // Získání všech cookies ze zprávy
    const cookies = req.cookies;

    // Získání názvu cookie, kterou chcete ponechat
    const cookieName = Object.keys(cookies)[0];

    const parseValue = JSON.parse(cookies[cookieName]); // Nastavíme hodnotu tokenu na prázdný řetězec
    const appTheme = parseValue.colorTheme
    console.log(parseValue);

    const deleletoToken = {
        token: "",
        colorTheme: appTheme
    }
    // Serializace dat do JSON řetězce
    const cookieValue = JSON.stringify(deleletoToken);

    // Nastavení upravených cookies zpět do odpovědi
    res.cookie(cookieName, cookieValue);

    // Odpověď, že token v cookies byl úspěšně smazán
    res.send('Token v cookies byl úspěšně smazán');
});

module.exports = router;
