const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const contact = require('../models/contact');

//Handling incoming get request of doctor_listing.
router.get('/', (req, res, next) => {
    res.end() 
    // contact.find()
    //     .exec()
    //     .then(docs => {
    //         console.log(docs);
    //         res.status(200).json(docs);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });
});

//Diagnostic_center ID
router.get('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    contact.findById(id)
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


//Handling POST request of contact.
router.post('/', (req, res, next) => {
    const contactdetail = new contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,

    });
    contactdetail
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling post request to contact",
                createdcontact: contactdetail
            });
        })
        .catch(err => console.log(err));

});


//Handling Delete Requests
router.delete('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    contact.remove({ _id: id })
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