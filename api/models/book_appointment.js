const mongoose = require("mongoose");
const book_appointmentSchema = mongoose.Schema({
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

module.exports = mongoose.model("book_appointment", book_appointmentSchema);
