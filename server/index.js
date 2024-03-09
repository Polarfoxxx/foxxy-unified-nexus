const express = require("express");
const app = express();  
    app.use(express.json());
const Joi = require("joi");
const mongoose = require("mongoose");
const Port = 5000;
const cors = require("cors");
app.listen(Port , () => { console.log(`connect to port ${Port}`) })
/* --------------------------------------------------- */

const { string } = require("joi");
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())
  /* --------------------------------------------------- */

mongoose
    .connect('mongodb://127.0.0.1:27017/messages', { useNewUrlParser: true })
        .then(() => console.log("connect to mongoo"))
        .catch(() => console.log("no connect"))
/* --------------------------------------------------- */
const messageSchema = new mongoose.Schema({
    tittle : String,
    allDay : Boolean,
    start : Date,
    end: Date
});

/* --------------------------------------------------- */
const Messages = mongoose.model("Message" , messageSchema);


/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* API RestFull--------------------------------------- */
/* cerate new object conatct method Post */
app.post("/api/add/messsage" , (req, res) => {
    const newsContakt = Joi.object({
        firstName : Joi.string().min(3).required(),
        lastName : Joi.string().min(3).required(),
        tel : Joi.number().min(3).required()
    });

const {err} = newsContakt.validate(req.body);
    if(err) {
        res.status(400).send(error.details[0].message);
        } else {
            Contact.create(req.body)
            .then((con) => { res.json(con)})
            .catch((err) => { res.send("neuspesne ulozenie")})
 }
    })


