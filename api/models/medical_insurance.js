const mongoose = require('mongoose');

const medical_insuranceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    country_name: String,
    description: String
   

});

module.exports = mongoose.model('medical_insurance', medical_insuranceSchema);