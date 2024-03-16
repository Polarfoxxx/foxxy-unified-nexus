const mongoose = require("mongoose");
/* const mongo = "mongodb://127.0.0.1:27017/Calendar"; */
const mongo = "mongodb+srv://suchovskymichal:z1PzyPDoR80XCXKN@cluster0.jhfpd8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


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
                start: Date | undefined,
                end: Date | undefined
            },
        ],
        messages: [
            {
                date_create: Date | undefined,
                message_content: String
            },
        ],
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;