//Express.js
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const doctorlistingRoutes = require('./api/routes/doctor_listing'); 
const diagnosticcenterRoutes = require('./api/routes/diagnostic_center'); 
const homecareRoutes = require('./api/routes/home_care');
const medicalinsuranceRoutes  = require('./api/routes/medical_insurance');

mongoose.connect('mongodb+srv://rahulsng25:'+ 
process.env.MONGO_ATLAS_PW +
'@tok2dok-rdnof.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS (C-Cross O-Origin R-Resource S-Sharing) Errors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header (
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONs'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});  
    }
    next();
});



// Routes which should handle requests.
app.use('/doctor_listing', doctorlistingRoutes);
app.use('/diagnostic_center', diagnosticcenterRoutes);
app.use('/home_care', homecareRoutes);
app.use('/medical_insurance', medicalinsuranceRoutes);


module.exports = app;