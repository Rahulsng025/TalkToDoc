const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

const doctor_listing = require("../models/doctor_listing");

//Handling incoming get request of doctor_listing..
router.get("/", (req, res, next) => {
  doctor_listing
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

//Doctos_Listig ID
router.get("/:doctorlistingId", (req, res, next) => {
  const id = req.params.doctorlistingId;
  doctor_listing
    .findById(id)
    .exec()
    .then((doc) => {
      console.log("From Database", doc);
      res.status(200).json({ doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//Handling POST request of doctor_listing.
router.post("/", (req, res, next) => {
  const doctorlisting = new doctor_listing({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    department: req.body.department,
    speciality: req.body.speciality,
    degrees: req.body.degrees,
    mobile: req.body.mobile,
    email: req.body.email,
    training: req.body.training,
    city: req.body.city,
    image: req.body.city,
    profile: req.body.profile
  });
  doctorlisting
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling post request to doctor_listing",
        createdDoctorListing: doctorlisting,
      });
    })
    .catch((err) => console.log(err));
});
//Handling Put Request using different method

// router.put("/:doctorlistingId", (req, res, next) => {
//   // if (!ObjectId.isValid(req.params.id))
//   //   return res.status(400).send(`No record with given id: ${req.params.id}`);

//   const doctorlisting = new doctor_listing({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     department: req.body.department,
//     speciality: req.body.speciality,
//     degrees: req.body.degrees,
//     mobile: req.body.mobile,
//     email: req.body.email,
//     training: req.body.training,
//     city: req.body.city,
//   });
//   doctor_listing.findByIdAndUpdate(
//     req.params.id,
//     { $set: doctorlisting },
//     { new: true },
//     (err, doc) => {
//       if (!err) {
//         res.send(doc);
//       } else {
//         console.log(
//           "Error in Doctor update :" + JSON.stringify(err, undefined, 2)
//         );
//       }
//     }
//   );
// });

//Handling Patch Request.

router.patch("/:doctorlistingId", (req, res, next) => {
  const id = req.params.doctorlistingId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  doctor_listing
    .update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

///Handling Delete Request by Id
router.delete("/:doctorlistingId", (req, res, next) => {
  const id = req.params.doctorlistingId;
  doctor_listing
    .remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
