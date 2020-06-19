const mongoose = require('mongoose');

const book_testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient_name: String,
    age: String,
    gender: String,
    number: String,
    locality: String,
    pincode: String,
    home_address: String,
    landmark: String,
    date: String
});

module.exports = mongoose.model('book_test', book_testSchema);