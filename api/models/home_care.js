const mongoose = require("mongoose");

const home_careSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  address: String,
  state: String,
  country: String,
});

module.exports = mongoose.model("home_care", home_careSchema);
