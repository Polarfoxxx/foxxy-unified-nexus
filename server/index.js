
const post_Login = require('./CRUD/post_login');


const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Port = 4000;
app.listen(Port, () => console.log(`connect to port ${Port}`));
app.use(cors());

/* ---------------------------------------------------------------------------- */
/* Login GET method ------------------------------------*/
app.use('/login', post_Login);
/* save GET method -------------------------------------*/

