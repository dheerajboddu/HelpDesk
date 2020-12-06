const { insertItem, getTicketCount, updateAssigneComments, getticketDetailsbyId, getticketDetailsbyUser} = require('../services/db')
var {sendMailInsert} = require('../controller/mail');
var utilities = require('../Utilities');


function insertTicket(ticket,res){
    var ticketId;
    ticket["Time"] = utilities.getTime();
    ticket["Status"] = 'open';
    ticket["AssigneeId"] = 'DKO2KOR';
    ticket["Asignee_Comments"] = '';
    ticket["owner_comments"] = '' 
    getTicketCount().then((count) => {
      countString = String(count+1).padStart(7, '0');
      ticketId = "REQ".concat(countString)
      ticket['ticketId']  = ticketId;
      insertItem(ticket)
    .then(() => {
     sendMailInsert(ticketId);
      res.json({ticketId: ticketId}).end();
    })
    .catch((err) => {
      console.log(err)
      res.status(200).end();
    })
  })
}

function updateComments(comment, res){
  updateAssigneComments(comment.NTId, comment.comments)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end();
  })
}


function getTickets(id, res){
  getticketDetailsbyId(id, res)
  .then((items)=>{
    res.json(items)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end();
  })
}

function getTicketsUser(id, res){
  getticketDetailsbyUser(id, res)
  .then((items)=>{
    res.json(items)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end();
  })
}
module.exports.insertTicket = insertTicket;
module.exports.updateComments = updateComments;
module.exports.getTickets = getTickets;
module.exports.getTicketsUser = getTicketsUser;