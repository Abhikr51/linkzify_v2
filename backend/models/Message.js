const Schema = require('mongoose').Schema
const MessageSchema = new Schema({
    username : String,
    message : String, 
})

const Message = mongoose.model('messages',MessageSchema);

module.exports = Message;