const express = require('express');
const router = express.Router();
const email = require('../lib/email.js');

router.post("/", function(req, res, next) {
	email.send(req.body)
		.then((response) => (res.status(200).send(response)))
		.catch((err) => (res.status(500).send(err)));
});

module.exports = router;
