const { insertItem, getItems, updateQuantity } = require('../services/db')
var {sendMailInsert} = require('../controller/mail');
var utilities = require('../Utilities');


function insertTicket(ticket,res){
    ticket["Time"] = utilities.getTime();
    ticket["Status"] = 'open';
    ticket["AssigneeId"] = 'DKO2KOR';
    ticket["AsigneeId_Comments"] = '';
    ticket["owner_comments"] = '' 
    insertItem(ticket)
    .then(() => {
     // sendMailInsert();
     console.log(ticket)
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err)
      res.status(200).end();
    })
    
}


module.exports.insertTicket = insertTicket;