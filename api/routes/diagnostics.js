const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Diagnostic = require('../models/diagnostic');
const config = require('../../config/database');

//Diagnostic Register

router.post('/register', (req, res, next) => {
    let newUser = new Diagnostic({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    Diagnostic.addUser(newUser, (err, diagnostic) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register Diagnostic Center' });
        }
        else {
            res.json({ success: true, msg: 'Diagnostic registered' });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Diagnostic.getUserByUsername(username, (err, diagnostic) => {
        if (err) throw err;
        if (!diagnostic) {
            return res.json({ success: false, msg: 'User not found' });
        }

        Diagnostic.comparePassword(password, diagnostic.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: diagnostic }, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    diagnostic: {
                        id: diagnostic._id,
                        name: diagnostic.name,
                        username: diagnostic.username,
                        email: diagnostic.email
                    }
                })
            } else {
                return res.json({ success: false, msg: 'Wrong Password' });
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ diagnostic: req.diagnostic });

});

router.get('/', (req, res, next) => {


    Diagnostic.find()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



router.get('/:registerId', (req, res, next) => {
    const id = req.params.registerId;
    Diagnostic.findById(id)
        .exec()
        .then(doc => {
            console.log('From Database', doc);
            res.status(200).json({ doc });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});

router.delete("/:diagnosticId", (req, res, next) => {
    const id = req.params.diagnosticId;

    Diagnostic.remove({ _id: id })
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

