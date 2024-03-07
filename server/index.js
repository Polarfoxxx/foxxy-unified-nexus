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
    .connect('mongodb://127.0.0.1:27017/contacts', { useNewUrlParser: true })
        .then(() => console.log("connect to mongoo"))
        .catch(() => console.log("no connect"))
/* --------------------------------------------------- */
const conatctSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    tel : Number,
});
/* --------------------------------------------------- */
const Contact = mongoose.model("Contact" , conatctSchema);


/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* API RestFull--------------------------------------- */
/* cerate new object conatct method Post */
app.post("/api/add/contact" , (req, res) => {
const {err} = newsContakt.validate(req.body);
    if(err) {
        res.status(400).send(error.details[0].message);
        } else {
            Contact.create(req.body)
            .then((con) => { res.json(con)})
            .catch((err) => { res.send("neuspesne ulozenie")})
 }
    })

    const newsContakt = Joi.object({
        firstName : Joi.string().min(3).required(),
        lastName : Joi.string().min(3).required(),
        tel : Joi.number().min(3).required()
    })

/* --------------------------------------------------- */
/* load all constact GET method */
 app.get("/api/all/contact" , (req, res) => {
    Contact.find()
        .then((contt) => { res.json(contt) })
        .catch(() => { res.send("errrr") })
    })
 
     
/* --------------------------------------------------- */
/* delete method delete contact */
app.delete('/api/delete/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(result => {
            if (result)
                res.json(result);
            else
                res.status(404).send("kontakt nebol najdeny!");
        })
        .catch(err => { res.send("chyba pri mazani filmu!") });
});
/* --------------------------------------------------- */
/* find contact by first name */
app.get('/api/search/:name', (req, res) => {
    const name = String(req.params.name);
        Contact.find({ lastName: name })
            .then((contt) => { res.json(contt) })
            .catch((errrr) => { res.send(errrr) })
    }) 

/* --------------------------------------------------- */
/* update contact by first name */
app.put('/api/update/:id', (req, res) => {
    const { error } = newsContakt.validate(req.body, false);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
         Contact.findByIdAndUpdate(req.params.id, req.body)
            .then(result => { res.json(result) })
            .catch(err => { res.send("Nepodařilo se uložit contact!") });
        }
    });