const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");

const post_LogIn = require('./CRUD/post_login');
const post_LogOut = require('./CRUD/post_LogOut');
const post_Register = require("./CRUD/post_register");
const post_createData = require("./CRUD/post_createData");
const get_readData = require("./CRUD/get_readData");
const delete_deleteData = require("./CRUD/delete_deleteData");
const update_putData = require("./CRUD/put_updateData");
const updateCookie = require("./cookie/updateCookie");
const readExpExistingCookie = require("./cookie/readExpiredExisting_cookie");
const deleteCookie = require("./cookie/deleteCookie");

const app = express();
const Port = 5000;

app.use(express.json());
app.use(cors({
    origin: 'https://zesty-cuchufli-29025b.netlify.app', // Vaše frontendová URL
    credentials: true
}));
app.use(cookieParser());

// Middleware pro nastavení CORS hlaviček ručně
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://zesty-cuchufli-29025b.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//! CRUD Endpoints
app.use('/register', post_Register); //! register POST method
app.use('/logIn', post_LogIn); //! Login POST method
app.use('/logOut', post_LogOut); //! Login POST method
app.use('/create', post_createData); //! save POST method
app.use('/read', get_readData); //! readData GET method
app.use('/delete', delete_deleteData); //! deleteData DELETE method
app.use('/update', update_putData); //! updateData PUT method
//! cookies
app.use('/cookies-exp', readExpExistingCookie); //! cookies read and control expiration
app.use('/cookies-delete', deleteCookie); //! cookies delete after logout
app.use('/cookies-update', updateCookie); //! cookies update

//! run server
app.listen(Port, () => console.log(`connect to port ${Port}`));
