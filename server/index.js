const post_Login = require('./CRUD/post_login');
const post_Register = require("./CRUD/post_register");
const post_saveData = require("./CRUD/post_saveData");
const get_loadEvents = require("./CRUD/get_loadEvents");
const get_loadMessages = require("./CRUD/get_loadMessages");

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Port = 5000;
app.listen(Port, () => console.log(`connect to port ${Port}`));
app.use(cors());


/* ---------------------------------------------------------------------------- */
/* register POST method --------------------------------*/
app.use('/register', post_Register);
/* Login GET method ------------------------------------*/
app.use('/login', post_Login);
/* save GET method -------------------------------------*/
app.use('/save', post_saveData);
/* loadEvents GET method ------------------------------*/
app.use('/loadEvents', get_loadEvents);
/* loadMessages GET method ----------------------------*/
app.use('/loadMessages', get_loadMessages);
