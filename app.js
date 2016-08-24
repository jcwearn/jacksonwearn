var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
