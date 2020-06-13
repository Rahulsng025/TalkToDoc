const mongoose = require('mongoose');

const book_testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: String,
    gender: String,
    number: String,
    email: String,
});

module.exports = mongoose.model('book_test', book_testSchema);