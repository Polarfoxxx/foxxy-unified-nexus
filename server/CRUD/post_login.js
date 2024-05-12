const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 1 mesiac v milisekundách
    const expirationDate = new Date(Date.now() + oneMonth);

    try {
        // Hľadanie používateľa 
        const user = await User.findOne({ username });
        setTimeout(() => {
            // Kontrola existencie používateľa 
            if (user) {
                // UnHashovanie hesla pomocou crypto
                const unHashPassword = crypto.createHash('sha256').update(password).digest('hex');
                if (unHashPassword === user.password) {  //potvrdenie ze uživatel existuje aj pasuje heslo
                    // Generovanie JWT s časovou expiráciou
                    const token = jwt.sign({ username }, "secret", { expiresIn: "2h" });
                    const defaultTheme = "dark"
                    // Vytvoření objektu s více hodnotami
                    const cookieData = {
                        token: token,
                        colorTheme: defaultTheme
                    };
                    // Serializace dat do JSON řetězce
                    const cookieValue = JSON.stringify(cookieData);
                    res.cookie(username, cookieValue, {
                        httpOnly: true,
                        expires: expirationDate
                    });
                    user.login.state = true;
                    user.save();
                    res.status(200).json({ username, token, defaultTheme });
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
