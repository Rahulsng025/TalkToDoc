const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const book_appointment = require("../models/book_appointment");

//Handling incoming get request of book_appointment..

router.get("/", (req, res, next) => {
  book_appointment
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

// Book_Appointment by Id

router.get("/:bookappointmentId", (req, res, next) => {
  const id = req.params.bookappointmentId;

  console.log('Request: ' + id);

  book_appointment
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
  const bookappointment = new book_appointment({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
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

  bookappointment
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        createbookappointment: bookappointment,
      });
    })
    .catch((err) => console.log(err));
});

//Handling Patch Request.
router.patch('/:bookappointmentId', (req, res, next) => {
  const id = req.params.bookappointmentId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  book_appointment.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
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

router.delete("/:bookappointmentId", (req, res, next) => {
  const id = req.params.bookappointmentId;

  console.log('ID received from server: ' + id);

  book_appointment
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
