import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import * as url from 'url';
//import cookieParser from 'cookie-parser'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

app.set('view engine', 'pug');

const specificViewPath = path.join(__dirname, 'pages', 'index.pug');
const specificViewPath2 = path.join(__dirname, 'pages', 'login.pug');
const specificViewPath3 = path.join(__dirname, 'pages', 'register.pug');

// global middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'loginAndRegister')));
app.use(
  session({
    name:'SessionCookie',
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires:60000 }
  })
);

// Aggiorna questo middleware per servire i file statici dalla directory 'loginAndRegister'
app.use('/loginAndRegister', express.static(path.join(__dirname, 'loginAndRegister')));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  if(req.session.username === true){
    res.render(specificViewPath);
  }else{
    res.send('<h1>sei acceduto</h1>');
    res.render(specificViewPath);
  }
});

app.get('/login', (req, res) => {
  req.session.username= false; 
  res.render(specificViewPath2);
});

app.get('/sigIn', (req, res) => {
  res.render(specificViewPath3);
});

app.get('/login/log', (req, res) => {
  req.session.username= true; 
  res.send('<h1>sei acceduto</h1>');
  res.render(specificViewPath);
});

export default app;
