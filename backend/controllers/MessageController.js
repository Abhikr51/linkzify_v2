const { ObjectId } = require("mongodb");
const Message = require("../models/Message")
const User = require("../models/User")

const sendMessage = async(req,res)=>{
    if(req.body.message ){
        let data = new Message({username : req.params.username , message : req.body.message});
        let result = await data.save()
        res.send({
            status: true,
            // msg: req.params.username,
            msg: "Message sent succesfully",
            data: result._id
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
    let data = await Message.find({username : req.user.username},"message");
    res.send({
        status: true,
        msg: "Messages list",
        data: data
    });
}
const getNameFromUsername = async(req,res)=>{
    let data = await User.findOne({username : req.body.username},"name");
    res.send({
        status: true,
        msg: "Name",
        data: data.name
    });
}

const MessageController = {
    sendMessage,
    getMessages,
    getNameFromUsername
}

module.exports = MessageController