const post_Login = require('./CRUD/post_login');
const post_Register = require("./CRUD/post_register");
const post_createData = require("./CRUD/post_createData");
const get_readData = require("./CRUD/get_readData");

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Port = 5000;
app.listen(Port, () => console.log(`connect to port ${Port}`));
app.use(cors());


/* ---------------------------------------------------------------------------- */
/* register POST method ---------------------------------*/
app.use('/register', post_Register);
/* Login POST method ------------------------------------*/
app.use('/login', post_Login);
/* save POST method -------------------------------------*/
app.use('/create', post_createData);
/* loadEvents GET method --------------------------------*/
app.use('/readData', get_readData);
