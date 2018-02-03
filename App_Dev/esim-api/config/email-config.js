var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'esim.mean@outlook.com',
    pass: 'esim@123'
  }
});

module.exports = transporter;