const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    username : String,
    message : String, 
})

const Message = mongoose.model('messages',MessageSchema);

module.exports = Message;