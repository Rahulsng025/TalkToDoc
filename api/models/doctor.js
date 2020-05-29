const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

const DoctorSchema = mongoose.Schema({

    name: {
        type: String
    },
    number: {
        type: String,
        required: true
    },

    gender: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }

});

const Doctor = module.exports = mongoose.model('Doctor', DoctorSchema);


module.exports.getUserById = function (id, callback) {
    Doctor.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    Doctor.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}
