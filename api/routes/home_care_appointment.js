const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const home_care_appointment = require('../models/home_care_appointment');

//Handling incoming get request of Home Care Appointment.

router.get('/', (req, res, next) => {
    home_care_appointment.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//Handling incoming get request of Home Care Appointment by Id.

router.get('/:homecareId', (req, res, next) => {
    const id = req.params.homecareId;
    home_care_appointment.findById(id)
        .exec()
        .then(docs => {
            console.log('From Database', docs);
            res.status(200).json({ docs });
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});

//Handling POST request by Home Care Appointment.

router.post('/', (req, res, next) => {
    const homecareappointment = new home_care_appointment({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        age: req.body.age,
        number: req.body.number,
        frequency: req.body.frequency,
        forwhom: req.body.forwhom,
        howsoon: req.body.howsoon
    });
    homecareappointment
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                createdhomecareappointment: homecareappointment
            });
        })
        .catch(err => console.log(err));

});

//Handling delete request by Id.

router.delete('/:homecareId', (req, res, next) => {
    const id = req.params.homecareId;
    home_care_appointment.remove({ _id: id })
        .exec()

        .then(result => {
            res.status(200).json(result);
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;