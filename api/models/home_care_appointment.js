const mongoose = require("mongoose");

const home_care_appointmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    forwhom: String,
    gender: String,
    age: String,
    howsoon: String,
    frequency: String,
    name: String,
    email: String,
    number: String,


});

module.exports = mongoose.model("home_care_appointment", home_care_appointmentSchema);