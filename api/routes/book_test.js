const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const book_test = require('../models/book_test');

//Handling incoming get request of book_test.
router.get('/', (req, res, next) => {
    book_test.find()

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

//Book_test ID
router.get('/:booktestId', (req, res, next) => {
    const id = req.params.booktestId;
    book_test.findById(id)
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

//Handling POST request of book_test.
router.post('/', (req, res, next) => {
    const booktest = new book_test({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        number: req.body.number,
        email: req.body.email,

    });
    booktest
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling post request to book_test",
                createdbooktest: booktest
            });
        })
        .catch(err => console.log(err));

});

//Handling Patch Request.
router.patch('/:booktestId', (req, res, next) => {
    const id = req.params.booktestId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    book_test.update({ _id: id }, { $set: updateOps })
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

router.delete('/:booktestId', (req, res, next) => {
    const id = req.params.booktestId;
    book_test.remove({ _id: id })
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