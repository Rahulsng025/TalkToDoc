const mongoose = require('mongoose');

const add_dcotorsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String,
    mobile: String,
    email: String,
    certificate: String,
    department: String,
    speciality: String,
    degrees: String,
    training: String,
    city: String,


});

module.exports = mongoose.model('add_doctors', add_dcotorsSchema);