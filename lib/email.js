var path = require('path');
var util = require('util');
var nodemailer = require('nodemailer');

module.exports = {
  send: (params, callback) => {
    var from_email = process.env.EMAIL;
    var password = process.env.EMAIL_PASS;
    var smtp_connection_string = util.format('smtps://%s:%s@smtp.gmail.com', from_email, password);
    var transporter = nodemailer.createTransport(smtp_connection_string);
    var name = params.name;
    var email = params.email;
    var phone = params.phone;
    var message = params.message;

    var to_address = process.env.EMAIL;
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
	return callback(err, null);
      } else {
	return callback(null, 'Success!');
      }
    });
  }
};
