const mongoose = require('mongoose');

const doctor_listingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    department: String,
    speciality: String,
    degrees: String,
    mobile: String,
    email: String,
    training: String,
    city: String,
    image: String,
    profile: String
    //Active: Boolean

});

module.exports = mongoose.model('doctor_listing', doctor_listingSchema);