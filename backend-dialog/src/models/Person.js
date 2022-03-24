const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
        picture: String,
        age: Number,
        eyeColor: String,
        nome: String
});

module.exports = mongoose.model("Person", PersonSchema);