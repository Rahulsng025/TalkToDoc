const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const booktestquery = require('../models/booktestquery');

//Handling incoming get request of book_test.
router.get('/', (req, res, next) => {
    booktestquery.find()

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
router.get('/:booktestqueryId', (req, res, next) => {
    const id = req.params.booktestqueryId;
    booktestquery.findById(id)
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
    const booktest = new booktestquery({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        query: req.body.query,
        number: req.body.number,
    });
    booktest
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling post request to book_test_query",
                createdbooktest: booktest
            });
        })
        .catch(err => console.log(err));

});

//Handling Delete Requests

router.delete('/:booktestqueryId', (req, res, next) => {
    const id = req.params.booktestqueryId;
    booktestquery.remove({ _id: id })
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