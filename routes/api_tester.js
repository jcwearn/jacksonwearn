var express = require('express');
var path = require('path');
var APIController = require('../controllers/api_controller.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var index = path.join(__dirname, "../", "views/index.html");
  res.sendFile(index);
});

router.post('/callapi', function(req, res, next) {
  var statusCode = 500;
  var response;
  if(req.body) {
    var controller = new APIController();
    controller.callAPI(req.body, function(err, data) {
      if (err) {
        console.log(err);
        response = err.text;
      } else if (data) {
        statusCode = 200;
        response = data;
      } else {
        statusCode = 400;
        response = "No response from API!";
      }
      res.status(statusCode).send(response);
    });
  }
});

module.exports = router;
