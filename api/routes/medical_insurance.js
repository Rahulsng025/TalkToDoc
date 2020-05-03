const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const medical_insurance = require('../models/medical_insurance');

//Handling incoming get request of Medical Insurance.

router.get('/', (req, res, next) => {
    medical_insurance.find()
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

//Handling incoming get request of Medical Insurance by Id.

router.get('/:medicalinsuranceId', (req, res, next) => {
    const id = req.params.medicalinsuranceId;
    medical_insurance.findById(id)
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

//Handling POST request by Home Care.

router.post('/', (req, res, next) => {
    const medicalinsurance = new medical_insurance({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        country_name: req.body.country_name,
        description: req.body.description

    });
    medicalinsurance
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                createdmedicalinsurance: medicalinsurance
            });
        })
        .catch(err => console.log(err));

});

//Handling Patch Request.
router.patch('/:medicalinsuranceId', (req, res, next) => {
    const id = req.params.medicalinsuranceId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    medical_insurance.update({ _id: id }, { $set: updateOps })
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


//Handling delete request by Id.

router.delete('/:medicalinsuranceId', (req, res, next) => {
    const id = req.params.medicalinsuranceId;
    medical_insurance.remove({ _id: id })
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