var config = require('./../../config/email-config');

function sendEmail(mailOptions) {
    
    config.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}

module.exports = { sendEmail };