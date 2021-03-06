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
const doctorsRoutes = require("./api/routes/doctors");
const diagnosticsRoutes = require('./api/routes/diagnostics');
const homecareappointmentRoutes = require('./api/routes/home_care_appointment');
const booktestRoutes = require('./api/routes/book_test');
const booktestqueryRoutes = require('./api/routes/booktestquery');
const booktestcontactRoutes = require('./api/routes/booktestcontact');
const contactRoutes = require('./api/routes/contact');
const adddoctorsRoutes = require('./api/routes/add_doctors');


//Mongoose Connection
mongoose.connect(
  "mongodb+srv://rahulsng25:7843914275@tok2dok-rdnof.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,useUnifiedTopology: true
  }
);

app.use(morgan("dev"));
//Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //CORS (C-Cross O-Origin R-Resource S-Sharing) Errors
// app.use((req, res, next) => {
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

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
app.use("/doctors", doctorsRoutes);
app.use("/diagnostics", diagnosticsRoutes);
app.use("/home_care_appointment", homecareappointmentRoutes);
app.use("/book_test", booktestRoutes);
app.use("/booktestquery", booktestqueryRoutes);
app.use("/booktestcontact", booktestcontactRoutes);
app.use("/contact", contactRoutes);
app.use("/add_doctors", adddoctorsRoutes);

// For deploying the application
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
})


module.exports = app;
