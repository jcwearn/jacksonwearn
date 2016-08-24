var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var index = path.join(__dirname, "../", "views/index.html");
  res.sendFile(index);
});

module.exports = router;
