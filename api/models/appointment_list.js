const mongoose = require("mongoose");
const appointment_listSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String,
    mobile: Number,
    address: String,
    email: String,
    dateofbirth: Date,
    consultingdoctor: String,
    dateofappointment: Date,
    timeofappointment: String,
    injury: String,
});

module.exports = mongoose.model("appointment_list", appointment_listSchema);
