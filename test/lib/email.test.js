var expect = require('expect.js');
var proxyquire = require('proxyquire');

var validOptions = true;

var transporterStub = function(smtpString) {
  return {
    sendMail: function(options, callback) {
      if (validOptions) {
	return callback(null, "That shit is cool");
      } else {
	return callback(new Error("You done fucked up!"));
      }
    }
  };
};

var nodemailerStub = {
  createTransport: transporterStub
};

var email = proxyquire('../../lib/email.js', {
  'nodemailer': nodemailerStub
});

var params = {
  name: 'Glorb Florb',
  email: 'glorbflorb@hamsam.biz',
  phone: '1-404-666-1337',
  message: 'Wow, you\'re website sucks!'
};

describe('lib/email.js', function() {
  it('should callback with Success! when given good params', (done) => {
    email.send(params, (err, data) => {
      expect(data).to.eql('Success!');
      done();
    });
  });

  it('should callback with Success! when given good params', (done) => {
    validOptions = false;
    email.send(params, (err, data) => {
      expect(err.toString()).to.eql("Error: You done fucked up!");
      done();
    });
  });
});
