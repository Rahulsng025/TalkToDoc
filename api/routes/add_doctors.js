const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const add_doctors = require("../models/add_doctors");

//Handling incoming get request of book_appointment..

router.get("/", (req, res, next) => {
    add_doctors
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

router.get("/:adddoctorsId", (req, res, next) => {
    const id = req.params.adddoctorsId;

    console.log('Request: ' + id);

    add_doctors
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
    const add = new add_doctors({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender,
        mobile: req.body.mobile,
        email: req.body.email,
        certificate: req.body.certificate,
        department: req.body.department,
        speciality: req.body.speciality,
        training: req.body.training,
        city: req.body.city
    });

    add
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                createadddoctors: add,
            });
        })
        .catch((err) => console.log(err));
});

//Handling Delete Request by Id

router.delete("/:adddoctorstId", (req, res, next) => {
    const id = req.params.adddoctorsId;

    console.log('ID received from server: ' + id);

    add_doctors
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