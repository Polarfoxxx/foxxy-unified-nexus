
const express = require("express");
const router = express.Router();

// Route to set a cookie
router.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true })
  res.send('Cookie has been set');
});


module.exports = router;
