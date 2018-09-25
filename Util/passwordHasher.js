const bcrypt = require('bcrypt');
const saltRounds = 2;

var encrypt = function (password) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hashPass) {
            // Store hash in your password DB.
            return hashPass;
            // console.log("password : "+hash);
        });
    });
}

var asynchEncrypt = function(plainTextPassword){
    return bcrypt.hashSync(plainTextPassword, saltRounds);
}

var validatePassword = function (plainTextPass, hash, callback) {
    bcrypt.compare(plainTextPass, hash, callback);
}

module.exports.encrypt = encrypt;
module.exports.validatePassword = validatePassword;
module.exports.asynchEncrypt = asynchEncrypt;