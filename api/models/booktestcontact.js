const mongoose = require('mongoose');

const booktestcontactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    location: String,
    reg_number: String,
    email: String,
    number: String



});

module.exports = mongoose.model('booktestcontact', booktestcontactSchema);