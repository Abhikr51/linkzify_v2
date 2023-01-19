

const sendMessage = (req,res)=>{
    res.send("Send Message")
}
const getMessages = (req,res)=>{
    res.send("Get Message List")
}

const MessageController = {
    sendMessage,
    getMessages
}

module.exports = MessageController