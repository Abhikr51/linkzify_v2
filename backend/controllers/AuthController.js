

const login = (req,res)=>{
    res.send("Login")
}
const register = (req,res)=>{
    res.send("register")
}
const logout = (req,res)=>{
    res.send("logout")
}
const getUser = (req,res)=>{
    res.send("Get User")
}



const AuthController = {
    login,
    register,
    logout,
    getUser,
}
module.exports = AuthController