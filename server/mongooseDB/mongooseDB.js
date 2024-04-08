const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const mongo = "mongodb+srv://suchovskymichal:z1PzyPDoR80XCXKN@cluster0.jhfpd8u.mongodb.net/Calendar?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(mongo, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("Error connecting to MongoDB:", error));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    custom: {
        theme: String
    },
    data: {
        events: [
            {
                start: Date,
                end: Date,
                title: String,
                comment: String
            },
        ],
        messages: [
            {
                start_message: Date,
                end_message: Date,
                title_message: String,
                content_message: String
            },
        ],
    }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;
