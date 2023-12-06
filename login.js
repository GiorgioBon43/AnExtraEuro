const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const PORT = 8080;

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true
}));

// parsing dei dati
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var session;

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});


//controllo se l'utente è già registrato
app.post('/login',(req,res) => {
    if(req.body.username && req.body.password){
        //check if the user already exists
        const query = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
        db.query(query, (err, result) => {
            if (err) throw err;
            if(result.length > 0){
                session=req.session;
                session.userid=req.body.username;
                res.redirect('/');
            }else{
                res.send('Incorrect Username and/or Password!');
            }
        });
    }else{
        res.send('Please enter Username and Password!');
    }
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
