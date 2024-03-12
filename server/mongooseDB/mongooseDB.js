const mongoose = require("mongoose");
const mongo = "mongodb://127.0.0.1:27017/messages";


mongoose
    .connect(mongo, { useNewUrlParser: true })
    .then(() => console.log("connect to mongoo"))
    .catch(() => console.log("no connect"))
/* --------------------------------------------------- */
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    custom: {
        theme: String
    },
    data: {
        events: [
            {
                title: String,
                start: Date,
                end: Date
            },
        ],
        messages: [
            {
                date_create: Date,
                message_content: String
            },
        ],
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;