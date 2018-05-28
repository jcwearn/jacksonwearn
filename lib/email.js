const nodemailer = require('nodemailer');
const path = require('path');

module.exports = {
    send: (params) => {
        const { name, email, phone, message } = params;
        if (!name || !email || !phone || !message) return Promise.reject({ statusCode: 400, message: 'missing parameters'});

        const emailAddress = process.env.EMAIL;
        const password = process.env.EMAIL_PASS;
        const smtpConnectionString = `smtps://${emailAddress}:${password}@smtp.gmail.com`;
        const transporter = nodemailer.createTransport(smtpConnectionString);
        const emailSubject = `Website Contact Form: ${name}`;
        const emailBody = `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nPhone: ${phone}\n\nMessage:\n${message}`;

        const mailOptions = {
            from: `"jacksonwearn.com" <${emailAddress}>`,
            to: emailAddress,
            subject: emailSubject,
            text: emailBody,
            html: `<p>${emailBody}</p>`
        };

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    console.log(err);
                    reject({ statusCode: 500, message: 'failed to send mail'  });
                } else {
                    resolve({ statusCode: 200, message: 'successfully sent mail'});
                }
            });
        });
    }
};
