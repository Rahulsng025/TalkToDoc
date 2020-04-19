const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const home_care = require('../models/home_care');

//Handling incoming get request of Home Care.

router.get('/', (req, res, next) => {
    home_care.find()
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

//Handling incoming get request of Home Care by Id.

router.get('/:homecareId', (req, res, next) => {
    const id  = req.params.homecareId;
    home_care.findById(id)
    .exec()
    .then(docs => {
        console.log('From Database', docs);
        res.status(200).json({docs});
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
});

//Handling POST request by Home Care.

router.post('/', (req, res, next) => {
    const homecare = new home_care({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country
    });
    homecare
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
              createdhomecare: homecare  
            });
        })
    .catch(err => console.log(err));

});
        

//Handling delete request by Id.

router.delete('/:homecareId', (req, res, next) => {
    const id = req.params.homecareId;
    home_care.remove({_id:id})
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