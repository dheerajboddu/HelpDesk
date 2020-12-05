const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'helpDesk'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const insertItem = (item) => {
  const collection = db.collection('ticketDetails')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('ticketDetails')
  return collection.find({}).toArray()
}

const updateQuantity = (id, quantity) => {
  const collection = db.collection('items')
  return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
}

const getpassword = (id) => {
  const collection = db.collection('userDetails')
  return collection.find({NTId:id}).toArray();
}

const getTicketCount = () => {
  const collection = db.collection('ticketDetails')
  return collection.count();
}

const updateAssigneComments = (id,comment) => {
  const collection = db.collection('ticketDetails')
  return collection.updateOne({NTId: id}, {$set:{Asignee_Comments: comment, Status: "In progress"}});
}

const getAssets = (id) => {
  const collection = db.collection('assetDetails');
  return collection.find({NTId:id}).toArray();
}

const getticketDetailsbyId = (id) =>{
  const collection = db.collection('ticketDetails')
  return collection.find({ticketId:id}).toArray();
}

const getticketDetailsbyUser = (id) =>{
  const collection = db.collection('ticketDetails')
  return collection.find({NTId:id}).toArray();
}
module.exports = { init, insertItem, getItems, updateQuantity, getpassword, getTicketCount, 
  updateAssigneComments, getAssets, getticketDetailsbyId, getticketDetailsbyUser}
