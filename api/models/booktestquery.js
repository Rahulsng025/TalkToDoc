const mongoose = require('mongoose');

const booktestquerySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    query: String,
    number: String,


});

module.exports = mongoose.model('booktestquery', booktestquerySchema);