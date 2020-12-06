var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dheeraj7121997@gmail.com',
      pass: 'Dheeraj@97'
    }
  });

 const sendMailInsert= (id) =>{
  var mailOptions = {
    from: 'dheeraj7121997@gmail.com',
    to: 'saivineethm007@gmail.com',
    subject: 'Ticket raised',
    text: id + 'is waiting to get reslove'
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
