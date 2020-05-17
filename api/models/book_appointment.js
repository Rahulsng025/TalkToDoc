const mongoose = require("mongoose");
const book_appointmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fname: String,
  lname: String,
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

module.exports = mongoose.model("book_appointment", book_appointmentSchema);
