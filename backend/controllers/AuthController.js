const jwt = require('jsonwebtoken')
const {ObjectId} = require("bson")
const { generateUniqueUsername } = require('../helper/library')
const User = require('../models/User')
const Message = require('../models/Message')

const login = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send({
            status: false,
            msg: "Fields are required !"
        })
    } else {
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) {
                res.send({
                    status: false,
                    msg: "Error",
                    error: err
                })
            }
            if (!user || !(user.password == req.body.password)) {
                return res.status(401).json({
                    status: false,
                    msg: 'Authentication failed. Invalid user or password.'
                });
            }
            return res.json({
                status: true,
                data: user,
                token: jwt.sign({ username: user.username, name: user.name, _id: user._id }, 'RESTFULAPIs', {

                    // expiresIn: 100000 // expires in 5 days
                    expiresIn: '10d' // expires in 5 days

                })
            });
        });

    }
}
const register = async (req, res) => {
    // res.send(req.body)
    if(req.body.vxxu && req.body.vxx_id){
        let vxxu = JSON.parse(atob(req.body.vxxu))
        let vxx_id = JSON.parse(atob(req.body.vxx_id))
        if(vxxu && vxx_id){
            let temp = {}
            for(var i of vxx_id){
               temp= await  Message.findOneAndUpdate({_id : ObjectId(i)},{private_sender : vxxu})
            }
        }
    }
    if (!req.body.name) {
        res.send({
            status: false,
            msg: "name required"
        })
    } else if (req.body.name.length < 4) {
        res.send({
            status: false,
            msg: "name at least 4 character"
        })
    } else {
        // let username = await generateUniqueUsername('abhi129')
        let username = await generateUniqueUsername(req.body.name.replaceAll(" ","_").slice(0, 4) + Math.floor(Math.random() * 1000 + 1))
        var newUser = new User({
            name: req.body.name,
            username,
            password: req.body.name.replaceAll(" ","_").slice(0, 4) + Math.floor(Math.random() * 1000 + 1),
        });
        newUser.save(function (err, user) {
            if (err) {
                return res.status(400).send({
                    status: false,
                    msg: err
                });
            } else {
                return res.send({
                    status: true,
                    msg: "User Created successfully.",
                    data: user,
                    token: jwt.sign({ username: user.username, name: user.name, _id: user._id }, 'RESTFULAPIs', {

                        // expiresIn: 100000 
                        expiresIn:  '10d' 
    
                    })
                });
            }
        });
    }

}
const logout = (req, res) => {
    res.send("logout")
}
const getUser = (req, res) => {
    if (req.user) {
        return res.send({
            status: true,
            msg: "success",
            data: req.user
        });
    } else {
        return res.status(401).json({ status: false, msg: 'Invalid token' });
    }
}



const AuthController = {
    login,
    register,
    logout,
    getUser,
}
module.exports = AuthController