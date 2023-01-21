const express = require("express")
const colors = require('colors');
const cors = require("cors")
const AuthController = require("./controllers/AuthController");
const { home } = require("./controllers/HomeController");
const HomeController = require("./controllers/HomeController");
const MessageController = require("./controllers/MessageController");
const { auth_verify, auth_required } = require("./middlewares/AuthMiddleware");
// const port = 8001
const app = express();

// ======== configs ========
const version = "/v1"
const endpoint = "/api" + version
const auth = "/auth"


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth_verify)
app.use(cors({
    origin : "*"
}))
// app.use(cors())
// ======== configs ========



//========= routes =========

app.get(endpoint + "/",HomeController.home)
app.post(endpoint + "/login",AuthController.login)
app.post(endpoint + "/create-user",AuthController.register)
app.get(endpoint + "/logout",AuthController.logout)
app.post(endpoint + "/send-message/:username",MessageController.sendMessage)
app.get(endpoint + "/get-messages",auth_required,MessageController.getMessages)
app.get(endpoint + "/get-user",auth_required,AuthController.getUser)

















//4O4 page
app.get("/*",(_,res)=>{
    res.send("4O4 - not found")
})
//========= routes =========

// ========= server =========
app.listen(
    process.env.PORT,
    ()=>console.log(`Backend started at port ${process.env.PORT}`.green)
)