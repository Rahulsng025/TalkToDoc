const mongoose = require("mongoose");
const appointment_listSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String,
    mobile: String,
    address: String,
    email: String,
    dateofbirth: String,
    consultingdoctor: String,
    dateofappointment: String,
    timeofappointment: String,
    injury: String,
});

module.exports = mongoose.model("appointment_list", appointment_listSchema);
