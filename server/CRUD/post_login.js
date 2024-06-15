const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 1 month in milliseconds
    const expirationDate = new Date(Date.now() + oneMonth);
    const cookies = req.cookies;

    try {
        // Find the user
        const user = await User.findOne({ username });

        // Simulate delay
        setTimeout(() => {
            if (user) {
                // Hash the password using SHA-256
                const unHashPassword = crypto.createHash('sha256').update(password).digest('hex');

                if (unHashPassword === user.password) {  // Password matches
                    // Generate JWT with expiration time
                    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "2h" });
                    const defaultTheme = "dark";

                    const cookieName = Object.keys(cookies)[0];
                    let appTheme = defaultTheme;

                    // Retrieve the app theme from the existing cookie
                    if (cookieName !== undefined) {
                        const parseValue = JSON.parse(cookies[cookieName]);
                        appTheme = parseValue.colorTheme || defaultTheme;
                    }

                    // Create the cookie data object
                    const cookieData = {
                        token: token,
                        colorTheme: appTheme
                    };

                    // Serialize the cookie data to a JSON string
                    const cookieValue = JSON.stringify(cookieData);

                    res.cookie(username, cookieValue, {
                        httpOnly: true,
                        expires: expirationDate,
                        sameSite: 'None', // Use 'None' for cross-site cookies
                        secure: true // Ensure the cookie is only sent over HTTPS
                    });

                    // Set login state to true
                    user.login.state = true;

                    // Save changes to the database
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
