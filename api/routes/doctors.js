const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Doctor = require('../models/doctor');
const config = require('../../config/database');

//Doctor Register

router.post('/register', (req, res, next) => {
    let newUser = new Doctor({
        name: req.body.name,
        number: req.body.number,
        gender: req.body.gender,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    Doctor.addUser(newUser, (err, doctor) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register doctor' });
        }
        else {
            res.json({ success: true, msg: 'Doctor registered' });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Doctor.getUserByUsername(username, (err, doctor) => {
        if (err) throw err;
        if (!doctor) {
            return res.json({ success: false, msg: 'User not found' });
        }

        Doctor.comparePassword(password, doctor.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: doctor }, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    doctor: {
                        id: user._id,
                        name: doctor.name,
                        username: doctor.username,
                        email: doctor.email
                    }
                })
            } else {
                return res.json({ success: false, msg: 'Wrong Password' });
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ doctor: req.doctor });

});

router.get('/', (req, res, next) => {


    Doctor.find()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//To get user data by id

router.get('/:registerId', (req, res, next) => {
    const id = req.params.registerId;
    Doctor.findById(id)
        .exec()
        .then(doc => {
            console.log('From Database', doc);
            res.status(200).json({ doc });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});



module.exports = router;

