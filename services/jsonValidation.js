const Joi = require('@hapi/joi')


const insertTicket = Joi.object().keys({
    NTId: Joi.string(),
    serviceType: Joi.string(),
    subService: Joi.string(),
    issueType: Joi.string(),
    //IssueDiscription: Joi.string(),
    assetId: Joi.string(),
    //priority: Joi.string(),
  })



const assigneComments = Joi.object().keys({
    comments: Joi.string(),
    NTId: Joi.string()
}) 


module.exports.insertTicket = insertTicket;
module.exports.assigneComments = assigneComments;