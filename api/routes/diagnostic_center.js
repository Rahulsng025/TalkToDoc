const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const diagnostic_center = require('../models/diagnostic_center');

//Handling incoming get request of doctor_listing.
router.get('/', (req, res, next) => {
    diagnostic_center.find()
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

//Diagnostic_center ID
router.get('/:diagnosticcenterId', (req, res, next) => {
    const id = req.params.diagnosticcenterId;
    diagnostic_center.findById(id)
        .exec()
        .then(doc => {
            console.log("From Database", doc);
            res.status(200).json({ doc });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


//Handling POST request of diagnostic_center.
router.post('/', (req, res, next) => {
    const diagnosticcenter = new diagnostic_center({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        established_in: req.body.established_in,
        address: req.body.address,
        contact: req.body.contact,
        landmark: req.body.landmark,
        website: req.body.website
    });
    diagnosticcenter
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling post request to diagnostic_center",
                createdDiagnosticCenter: diagnosticcenter
            });
        })
        .catch(err => console.log(err));

});

//Handling Patch Request.
router.patch('/:diagnosticcenterId', (req, res, next) => {
    const id = req.params.diagnosticcenterId;
    const diagnosticInfo = req.body;

    diagnostic_center.update({ _id: id }, diagnosticInfo)
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

//Handling Delete Requests
router.delete('/:diagnosticcenterId', (req, res, next) => {
    const id = req.params.diagnosticcenterId;
    diagnostic_center.remove({ _id: id })
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