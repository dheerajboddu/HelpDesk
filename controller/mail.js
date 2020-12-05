var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dheeraj7121997@gmail.com',
      pass: 'Dheeraj@97'
    }
  });

 const sendMailInsert= () =>{
  var mailOptions = {
    from: 'dheeraj7121997@gmail.com',
    to: 'dheeraj7121997@gmail.com',
    subject: 'Help Needed',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 }

 exports.sendMailInsert = sendMailInsert;
