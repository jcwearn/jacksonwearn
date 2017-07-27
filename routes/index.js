var express = require("express");
var router = express.Router();
var email = require("../lib/email.js");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index");
});

router.post("/contact", function(req, res, next) {
	if(req.body && Object.keys(req.body).length === 4) {
		email.send(req.body, function(err, data) {
			if (err) {
				res.status(500).send("Error Sending Email!");
			} else {
				res.status(200).send(data);
			}
		});
	} else {
		res.status(400).send("Bad Request!");
	}
});

module.exports = router;
