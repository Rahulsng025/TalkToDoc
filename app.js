//Express.js
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const config = require('./config/database');

app.use(cors());

const doctorlistingRoutes = require("./api/routes/doctor_listing");
const diagnosticcenterRoutes = require("./api/routes/diagnostic_center");
const homecareRoutes = require("./api/routes/home_care");
const medicalinsuranceRoutes = require("./api/routes/medical_insurance");
const bookappointmentRoutes = require("./api/routes/book_appointment");
const appointmentlistRoutes = require("./api/routes/appointment_list");
const usersRoutes = require("./api/routes/users");



//Mongoose Connection
mongoose.connect(
  "mongodb+srv://rahulsng25:" +
  process.env.MONGO_ATLAS_PW +
  "@tok2dok-rdnof.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(morgan("dev"));
//Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS (C-Cross O-Origin R-Resource S-Sharing) Errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONs") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Routes which should handle requests.
app.use("/doctor_listing", doctorlistingRoutes);
app.use("/diagnostic_center", diagnosticcenterRoutes);
app.use("/home_care", homecareRoutes);
app.use("/medical_insurance", medicalinsuranceRoutes);
app.use("/book_appointment", bookappointmentRoutes);
app.use("/appointment_list", appointmentlistRoutes);
app.use("/users", usersRoutes);


module.exports = app;
