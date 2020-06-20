const mongoose = require('mongoose');

const book_testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient_name: String,
    gender: String,
    age: String,
    email: String,
    number: String,
    home_address: String,
    locality: String,
    pincode: String,
    city: String,
    time: String,
    date: String,

});

module.exports = mongoose.model('book_test', book_testSchema);