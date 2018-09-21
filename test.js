const bcrypt = require('bcrypt');

//import models
const UserDetailModel = require('./Models/userDetailsModel');

var password = 'ojn5kor';
var hashedPass = '$2b$04$hz17OiyDYAlJiYYwQEFHM.ykWdrqkUlsNwMlZkkm0PN6nGfflKDuS';
var saltRounds = 2;
var encPass = '';

var encrypt = function () {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in your password DB.
            encPass = hash;
            console.log("password : " + hash);

            // compare();
        });
    });
}


var compare = function (plaintextPass, encPass) {
    bcrypt.compare(plaintextPass, encPass, function (err, res) {
        // res == true
        console.log('Compare result: ' + res);
    });
}

// compare(password, hashedPass);

var fetchAllUserDetails = function(){
    let promise = UserDetailModel.queries.fetchAllUserDetails();
    promise.then((data)=>{
        data.forEach(i=>{
            console.log(i);
        })
    })
}

fetchAllUserDetails();  
console.log('executed'); 
