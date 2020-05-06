const mongoose = require('mongoose');

const diagnostic_centerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    established_in: String,
    address: String,
    contact: String,
    landmark: String,
    website: String

});

module.exports = mongoose.model('diagnostic_center', diagnostic_centerSchema);