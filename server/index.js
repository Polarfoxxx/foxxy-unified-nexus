
const post_Register = require('./CRUD/post_register');


const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Port = 4000;
app.listen(Port, () => console.log(`connect to port ${Port}`));
app.use(cors());

/* ---------------------------------------------------------------------------- */
/* register POST method --------------------------------*/
app.use('/register', post_Register);
/* Login GET method ------------------------------------*/
app.use('/login', post_Log);
/* save GET method -------------------------------------*/

