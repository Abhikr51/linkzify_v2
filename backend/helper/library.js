const User = require("../models/User");

const generateUniqueUsername = (proposedName) => {
    return User
        .findOne({ username: proposedName })
        .then(function (account) {
            if (account) {
                console.log('username exists: ' + proposedName);
                proposedName = proposedName.slice(0,4)
                proposedName += Math.floor(Math.random() * 1000 + 1);
                return generateUniqueUsername(proposedName); // <== return statement here
            }
            console.log('proposed name is unique' + proposedName);
            return proposedName;
        })
        .catch(function (err) {
            console.error(err);
            throw err;
        });
}

module.exports={
    generateUniqueUsername,
}