var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('util');
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/connect-four', function(req, res, next) {
  res.render('connect_four');
});

router.get('/google471c4d725062c531.html', function(req, res,  next) {
  var webmaster = path.join(__dirname, "../", "views", "google471c4d725062c531.html");
  res.sendFile(webmaster);
});

router.post('/contact', function(req, res, next) {
  if(req.body && Object.keys(req.body).length === 4) {
    var from_email = process.env.EMAIL;
    var password = process.env.EMAIL_PASS;
    var smtp_connection_string = util.format('smtps://%s:%s@smtp.gmail.com', from_email, password);
    var transporter = nodemailer.createTransport(smtp_connection_string);
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    var to_address = 'jacksonwearn@gmail.com';
    var email_subject = util.format('Website Contact Form: %s', name);
    var email_body = util.format('You have received a new message from your website contact form.\n\nHere are the details:\n\nName: %s\n\nEmail: %s\n\nPhone: %s\n\nMessage:\n%s', name, email, phone, message);

    var mail_options = {
      from: '"jacksonwearn.com" <jacksonwearn@gmail.com>',
      to: to_address,
      subject: email_subject,
      text: email_body,
      html: '<p>'+ email_body +'</p>'
    };

    transporter.sendMail(mail_options, function(err, info) {
      if (err) {
        console.log(err);
        res.status(500).send("Error Sending Email!");
      } else {
        res.status(200).send("Success!");
      }
    });
  } else {
    res.status(400).send("Bad Request!");
  }
});

module.exports = router;
