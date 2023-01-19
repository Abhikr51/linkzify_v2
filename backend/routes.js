const express = require("express")
const colors = require('colors');
const AuthController = require("./controllers/AuthController");
const { home } = require("./controllers/HomeController");
const HomeController = require("./controllers/HomeController");
const MessageController = require("./controllers/MessageController");
const port = 8001
const app = express();

// ======== configs ========
const version = "/v1"
const endpoint = "/api" + version
const auth = "/auth"
// ======== configs ========



//========= routes =========

app.get(endpoint + "/",HomeController.home)
app.post(endpoint + "/login",AuthController.login)
app.post(endpoint + "/create-user",AuthController.register)
app.get(endpoint + "/logout",AuthController.logout)
app.post(endpoint + "/send-message",MessageController.sendMessage)
app.get(endpoint + "/get-messages",MessageController.getMessages)
app.get(endpoint + "/get-user",AuthController.getUser)

















//4O4 page
app.get("/*",(_,res)=>{
    res.send("404 - not found")
})
//========= routes =========

// ========= server =========
app.listen(
    port,
    ()=>console.log(`Backend started at port ${port}`.green)
)