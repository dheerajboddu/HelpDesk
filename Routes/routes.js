const express = require('express')
const Joi = require('@hapi/joi')
const { insertItem, getItems, updateQuantity } = require('../services/db')
var {sendMailInsert} = require('../controller/mail');
var mongo = require('../controller/Mongo');
var auth = require('../controller/authenticate');
var valid = require('../services/jsonValidation')
const router = express.Router()

// const itemSchema = Joi.object().keys({
//   name: Joi.string(),
//   quantity: Joi.number().integer().min(0)
// })



router.post('/item', (req, res) => {
  const item = req.body;
  //const result = itemSchema.validate(item)
  const result = valid.insertTicket.validate(item)
  if (result.error) {
    console.log(result.error)
    res.status(400).end()
    return
  }
  mongo.insertTicket(item, res);
  //res.status(200).end();
})

router.get('/items', (req, res) => {
  getItems()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.put('/item/:id/quantity/:quantity', (req, res) => {
  const { id, quantity } = req.params
  updateQuantity(id, parseInt(quantity))
    .then(() => {
      res.status(200).end()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.post('/authenticate', (req,res) => {
auth.authenticate(req.body,res);
})

router.post('/updateassignecomments', (req,res) => {
  const result = valid.assigneComments.validate(req.body);
  if (result.error) {
    console.log(result.error)
    res.status(400).end()
    return
  }
  mongo.updateComments(req.body, res);
})
module.exports = router
