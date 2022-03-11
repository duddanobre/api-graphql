const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
        index: Number,
        picture: String,
        age: Number,
        eyeColor: String,
        name: String,
        company: String,
        email: String,
        phone: String,
        friends: {
            picture: String,
            age: Number,
            eyeColor: String,
            name: String,
            company: String,
            email: String,
            phone: String,
        },
        greeting: String,
});

module.exports = mongoose.model("Person", PersonSchema);