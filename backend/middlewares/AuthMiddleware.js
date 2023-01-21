const JsonWebToken = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/User");

exports.auth_required = function (req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ status: false, msg: 'Unauthorized user!!' });
  }
};
exports.auth_verify = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    if (req.headers.authorization.split(' ')[1]) {
      JsonWebToken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', async function (err, decode) {
        if (err) req.user = undefined;
        await User.findById(ObjectId(decode._id))
          .then((data) => {
            req.user = data
          }).catch((err) => {
            req.user = undefined
            console.log("auth_verify", err);
          });

        await next();
      });
    } else {
      req.user = undefined;
      next();
    }
  } else {
    req.user = undefined;
    next();
  }
}