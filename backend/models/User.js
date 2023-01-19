const Schema = require('mongoose').Schema
const UserSchema = new Schema({
    username : String,
    name : String,
    password : String,
})

const User = mongoose.model('users',UserSchema);

module.exports = User;