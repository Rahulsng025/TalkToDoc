const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const appointment_list = require("../models/appointment_list");

//Handling incoming get request of book_appointment..

router.get("/", (req, res, next) => {
    appointment_list
        .find()
        .exec()
        .then((docs) => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

//appointment_list by Id

router.get("/:appointmentlistId", (req, res, next) => {
    const id = req.params.appointmentlistId;

    console.log('Request: ' + id);

    appointment_list
        .findById(id)
        .exec()
        .then((docs) => {
            console.log(docs);
            res.status(200).json({ docs });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ erro: err });
        });
});

//Handling POST request of Book_Appointment

router.post("/", (req, res, next) => {
    const appointmentlist = new appointment_list({
        _id: new mongoose.Types.ObjectId(),
        fname: req.body.fname,
        lname: req.body.lname,
        gender: req.body.gender,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email,
        dateofbirth: req.body.dateofbirth,
        consultingdoctor: req.body.consultingdoctor,
        dateofappointment: req.body.dateofappointment,
        timeofappointment: req.body.timeofappointment,
        injury: req.body.injury
    });

    appointmentlist
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                createappointmentlist: appointmentlist,
            });
        })
        .catch((err) => console.log(err));
});
//Handling Patch Request.
router.patch('/:appointmentlistId', (req, res, next) => {
    const id = req.params.appointmentlistId;
    const appointmentInfo = req.body;



    console.log(id);
    console.log(appointmentInfo);

    appointment_list.findByIdAndUpdate({ _id: id }, appointmentInfo)
        .exec()
        .then(result => {
            console.log(result);
            console.log('Result updated');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
//Handling Delete Request by Id

router.delete("/:appointmentlistId", (req, res, next) => {
    const id = req.params.appointmentlistId;

    console.log('ID received from server: ' + id);

    appointment_list
        .remove({ _id: id })
        .exec()
        .then((result) => {
            console.log(`Result(Server): ${result}`);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

module.exports = router;
