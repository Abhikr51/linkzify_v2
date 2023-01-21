const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('users', UserSchema);

module.exports = User;