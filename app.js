const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//import controllers
const PasswordHasher = require('./Util/passwordHasher');

//import models
const UserDetailModel = require('./Models/userDetailsModel');

// Connect mongoose to our database
const config = require('./database');
mongoose.connect(config.database, { useNewUrlParser: true });

//Initialize our app variable
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});

var sessionChecker = function (req, res, next) {
    if (req.session.user && req.cookies.user_sid) {
        // res.send('Session Exists !!!');
        // console.log('Session Exists !!!');
        res.redirect('/dashboard');
    } else {
        next();
    }
}

// app.get('/', sessionChecker, (req, res) => {
//     req.session.user = true;
//     res.send('Hello There!! Session has been created');
// })

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');

    // var promise = UserDetailModel.queries.fetchAllUserDetails();
    // promise.then((data)=>{
    //     data.array.forEach(element => {
    //         console.log(element);
    //         res.send(element);
    //     });
    // });
});

app.route('/login')
    .post((req, res) => {
        let user = req.body.username;
        let pass = req.body.password;

        //fetch password from db and then compare with form password
        UserDetailModel.queries.fetchUserDetailByUserId(user, (err, data)=>{
            let hashedPass = data[0]._doc.password;
            PasswordHasher.validatePassword(pass, hashedPass,  (err, result)=> {
                if(result){
                    res.send("Correct Password");
                }else{
                    res.send("Wrong Password");
                }
            });
           
        })
    })

//Declaring Port
const port = 3000;

app.listen(port, () => {
    console.log('Starting server at ' + port);
});