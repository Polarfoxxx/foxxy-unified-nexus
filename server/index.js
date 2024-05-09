const post_Login = require('./CRUD/post_login');
const post_Register = require("./CRUD/post_register");
const post_createData = require("./CRUD/post_createData");
const get_readData = require("./CRUD/get_readData");
const delete_deleteData = require("./CRUD/delete_deleteData");
const update_putData = require("./CRUD/put_updateData");
const cookies = require("./cookie/setCookie")
const cookieParser = require('cookie-parser');


const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Port = 5000;
app.listen(Port, () => console.log(`connect to port ${Port}`));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  app.use(cookieParser());


/* register POST method ---------------------------------*/
app.use('/register', post_Register);
/* Login POST method ------------------------------------*/
app.use('/login', post_Login);
/* save POST method -------------------------------------*/
app.use('/create', post_createData);
/* readData GET method ----------------------------------*/
app.use('/read', get_readData);
/* deleteData DELETE method -----------------------------*/
app.use('/delete', delete_deleteData);
/* updateData PUT method --------------------------------*/
app.use('/update', update_putData);


/* updateData PUT method --------------------------------*/
app.use('/cookies', cookies);

  
