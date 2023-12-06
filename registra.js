const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const reg = express();
const PORT = 7777;

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//esegui quando si è sul file registra.html
reg.get('/',(req,res) => {
    res.sendFile('views/registra.html',{root:__dirname})
});

//session middleware
reg.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true
}));

// parsing dei dati
reg.use(express.json());
reg.use(express.urlencoded({ extended: true }));

//serving public file
reg.use(express.static(__dirname));

// cookie parser middleware
reg.use(cookieParser());

// a variable to save a session
var session;

//create a new user and save it in the database crowdfunding, tabel users
reg.post('/user',(req,res) => {
    if(req.body.username && req.body.password && req.body.email){
        //check if the user already exists
        const query = `SELECT * FROM users WHERE username = '${req.body.username}' OR email = '${req.body.email}'`;
        db.query(query, (err, result) => {
            if (err) throw err;
            if(result.length > 0){
                res.send('User already exists');
            }else{
                //insert the new user in the database
                const query = `INSERT INTO users (username, password, email) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}')`;
                db.query(query, (err, result) => {
                    if (err) throw err;
                    res.send('User created');
                });
            }
        });
    }else{
        res.send('Invalid username or password');
    }
});
