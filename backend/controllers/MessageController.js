const { ObjectId } = require("mongodb");
const Message = require("../models/Message")

const sendMessage = async(req,res)=>{
    if(req.body.message ){
        let data = new Message({username : req.params.username , message : req.body.message});
        let result = await data.save()
        res.send({
            status: true,
            // msg: req.params.username,
            msg: "Message sent succesfully",
            data: result
        });

    }else{
        res.send({
            status: false,
            msg: "message required",
            data: []
        });
    }
}
const getMessages = async(req,res)=>{
    let data = await Message.find({username : req.user.username});
    res.send({
        status: true,
        msg: "Messages list",
        data: data
    });
}

const MessageController = {
    sendMessage,
    getMessages
}

module.exports = MessageController