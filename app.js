if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/contact', contactRouter);
app.use('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	const err = new Error("Not Found");
// 	err.status = 404;
// 	next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get("env") === "development" ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.redirect("/error.html");
// });

module.exports = app;
