const post_Login = require('./CRUD/post_login');
const post_Register = require("./CRUD/post_register");
const post_createData = require("./CRUD/post_createData");
const get_readData = require("./CRUD/get_readData");
const delete_deleteData = require("./CRUD/delete_deleteData");
const update_putData = require("./CRUD/put_updateData");
const cookies = require("./cookie/cookie")
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const cors = require("cors");
const Port = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());



// CRUD Endpoints
app.use('/register', post_Register); // register POST method
app.use('/login', post_Login); // Login POST method
app.use('/create', post_createData); // save POST method
app.use('/read', get_readData); // readData GET method
app.use('/delete', delete_deleteData); // deleteData DELETE method
app.use('/update', update_putData); // updateData PUT method
app.use('/cookies', cookies); // cookies POST method

app.listen(Port, () => console.log(`connect to port ${Port}`));
