const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 1 mesiac v milisekundách
    const expirationDate = new Date(Date.now() + oneMonth);
    const cookies = req.cookies;
    try {
        //! Hľadanie používateľa 
        const user = await User.findOne({ username });
        setTimeout(() => {
            //! Kontrola existencie používateľa 
            if (user) {
                //! UnHashovanie hesla pomocou crypto
                const unHashPassword = crypto.createHash('sha256').update(password).digest('hex');
                if (unHashPassword === user.password) {  //potvrdenie ze uživatel existuje aj pasuje heslo
                    //! Generovanie JWT s časovou expiráciou
                    const token = jwt.sign({ username }, "secret", { expiresIn: "2h" });
                    const defaultTheme = "dark";

                    const cookieName = Object.keys(cookies)[0];
                    let appTheme = defaultTheme;
                    //! ak je cookie definovane tak si zoberieme nastavenu app themu
                    if (cookieName !== undefined) {
                        const parseValue = JSON.parse(cookies[cookieName]);
                        appTheme = parseValue.colorTheme || defaultTheme;
                    };
                    //!vytvorime konečný objekt pre odoslanie bud nova thema alebo uložena
                    const cookieData = {
                        token: token,
                        colorTheme: appTheme
                    };

                    //! Serializace dat do JSON řetězce
                    const cookieValue = JSON.stringify(cookieData);

                    res.cookie(username, cookieValue, {
                        httpOnly: true,
                        secure: true, // Ensure the cookie is only sent over HTTPS
                        sameSite: 'None',
                        expires: expirationDate
                    });
                    //! natsavenie statusu na true pri prihlaseni
                    user.login.state = true;
                    //! ulozeni zmen do  db
                    user.save();
                    res.status(200).json();
                } else {
                    res.status(401).json({ message: "Incorrect password" });
                }
            } else {
                res.status(401).json({ message: "The user does not exist" });
            }
        }, 4000);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
