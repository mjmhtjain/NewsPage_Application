const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dataScraper = require('./Util/dataScrapper');
const request = require('request');
const cheerio = require('cheerio');

//import controllers
const PasswordHasher = require('./Util/passwordHasher');

//import models
const UserDetailModel = require('./Models/userDetailsModel');
const NewsArticlesModel = require('./Models/newsArticlesModel');

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
        next();
    } else {
        res.clearCookie('user_sid');
        res.redirect('/');
    }
}

// route for Home-Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// route for Home-Page
app.get('/testing', (req, res) => {
    res.json({ success: true, message: 'Hello There .. ' });
});

// route for Home-Page
app.post('/scrape', sessionChecker, (req, res) => {
    if (req.body) {
        let url = req.body.url;
        let title = dataScraper.titleScraper(url, function (err, response, html) {
            if (!err) {
                let $ = cheerio.load(html);
                $('title').filter(function () {
                    let data = $(this);
                    // console.log(data.text());
                    let pageTitle = data.text();

                    let newsArticlesModel = NewsArticlesModel.model;
                    let newObj = new newsArticlesModel({
                        title : pageTitle,
                        URL : url,
                        clicks : 0
                    });
                    NewsArticlesModel.queries.persistNewsArticle(newObj, (err, dbData)=>{
                        if(!err){
                            res.json({ success: true, message: 'Article Added Successfully', data: dbData });
                        }else{
                            res.json({ success: false, message: err, data: null });
                        }
                    });

                    // res.json({ success: true, message: '', data: pageTitle });
                });
            } else {
                console.log(err);
                res.json({ success: false, message: err });
            }
        });

    } else {
        res.json({ success: false, message: 'Invalid Data received' });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('user_sid');
    req.session.user = null;
    res.json({ success: true, message: 'Cookies cleared' });
});

app.route('/login')
    .post((req, res) => {
        let user = req.body.userId;
        let pass = req.body.password;

        //fetch password from db and then compare with form password
        UserDetailModel.queries.fetchUserDetailByUserId(user, (err, data) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (data && data.length > 0) {
                    let hashedPass = data[0]._doc.password;
                    PasswordHasher.validatePassword(pass, hashedPass, (err, result) => {
                        if (result) {
                            req.session.user = user;
                            res.json({ success: true, message: "Correct Password", data: { userId: user, password: pass } });
                        } else {
                            req.session.user = null;
                            res.json({ success: false, message: "Wrong Password" });
                        }
                    });
                } else {
                    req.session.user = null;
                    res.json({ success: false, message: "Wrong Password" });
                }
            }
        })
    });

app.get('/fetchAllNewsArticles', (req, res) => {
    NewsArticlesModel.queries.fetchAllNewsArticles((err, dbData) => {
        if (!err) {
            res.json({ success: true, message: 'success', data: dbData });
        } else {
            res.json({ success: false, message: err, data: null });
        }
    })
});

app.use((req, res, next)=>{
    res.clearCookie('user_sid');
    res.redirect('/');
})

//Declaring Port
const port = 3000;

app.listen(port, () => {
    console.log('Starting server at ' + port);
});