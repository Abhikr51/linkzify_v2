const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    username : String,
    message : String, 
    created: {
        type: Date,
        default: Date.now
    },
    private_sender:{
        type : Array
    }
})

const Message = mongoose.model('messages',MessageSchema);

module.exports = Message;