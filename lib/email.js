var path = require("path");
var util = require("util");
var nodemailer = require("nodemailer");

module.exports = {
	send: (params, callback) => {
		var emailAddress = process.env.EMAIL;
		var password = process.env.EMAIL_PASS;
		var smtpConnectionString = util.format("smtps://%s:%s@smtp.gmail.com", emailAddress, password);
		var transporter = nodemailer.createTransport(smtpConnectionString);
		var emailSubject = util.format("Website Contact Form: %s", params.name);
		var emailBody = util.format("You have received a new message from your website contact form.\n\nHere are the details:\n\nName: %s\n\nEmail: %s\n\nPhone: %s\n\nMessage:\n%s", params.name, params.email, params.phone, params.message);

		var mail_options = {
			from: "\"jacksonwearn.com\" <" + emailAddress  + ">",
			to: emailAddress,
			subject: emailSubject,
			text: emailBody,
			html: "<p>"+ emailBody +"</p>"
		};

		transporter.sendMail(mail_options, function(err, info) {
			if (err) {
	      console.log(err);
	      return callback(err, null);
			} else {
	      return callback(null, "Success!");
			}
		});
	}
};
