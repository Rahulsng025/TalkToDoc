const mongoose = require('mongoose');

const doctor_listingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    speciality: String,
    degrees: String,
    experience: Object,
    training: String

});

module.exports = mongoose.model('doctor_listing', doctor_listingSchema);