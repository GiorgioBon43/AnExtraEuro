import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import database from './config/dataBase.js';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

app.set('view engine', 'pug');

const specificViewPath = path.join(__dirname, 'pages', 'index.pug');
const specificViewPath2 = path.join(__dirname, 'pages', 'login.pug');
const specificViewPath3 = path.join(__dirname, 'pages', 'signIn.pug');

// global middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'loginAndRegister')));
app.use(express.json());
app.use(
  session({
    name:'Session',
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
  req.session.loggedIn = req.session.loggedIn || false;
  res.render(specificViewPath, { loggedIn: req.session.loggedIn });
});

app.get('/login', (req, res) => {
  res.render(specificViewPath2);
});

app.get('/sigIn', (req, res) => {
  res.render(specificViewPath3);
});

app.get('/login/log', (req, res) => {
  res.render(specificViewPath, { loggedIn: req.session.loggedIn });
});

app.get('/sigIn/create', (req, res) => {
  res.render(specificViewPath);
});

app.post('/login/log', express.json(), (req, res) => {
  const { username, email, password } = req.body;
  // Esegui la query SQL per verificare se i dati esistono nel database
  const query = 'SELECT * FROM ACCOUNT WHERE NICKNAME = ? AND EMAIL = ? AND PASSWORD = ?';
  database.query(query, [username, email, password], (error, results) => {
    if (error) {
      console.error('Errore nella query SQL:', error);
      return res.status(500).send('Errore interno del server');
    }

    if (results.length > 0) {
      req.session.loggedIn = true;
      // Reindirizza solo dopo che la query ha restituito i risultati
      return res.render(specificViewPath, { loggedIn: req.session.loggedIn });
    } else {
      res.status(404).send('I dati non esistono nel database');
    }
  });
});

app.post('/sigIn/create', express.json(), (req, res) => {
  const { username, email, password } = req.body;

  // Controlla se l'email esiste già nel database
  const emailCheckQuery = 'SELECT * FROM ACCOUNT WHERE EMAIL = ?';
  database.query(emailCheckQuery, [email], (emailCheckError, emailCheckResults) => {
    if (emailCheckError) {
      console.error('Errore nella query di verifica dell\'email:', emailCheckError);
      return res.status(500).send('Errore interno del server');
    }

    if (emailCheckResults.length > 0) {
      // L'email esiste già nel database
      return res.status(409).send('L\'email esiste già nel database');
    } else {
      // L'email non esiste nel database, esegui la registrazione
      const signUpQuery = 'INSERT INTO ACCOUNT (NICKNAME, EMAIL, PASSWORD) VALUES (?, ?, ?)';
      database.query(signUpQuery, [username, email, password], (signUpError, signUpResults) => {
        if (signUpError) {
          console.error('Errore durante la registrazione:', signUpError);
          return res.status(500).send('Errore interno del server');
        }
        return res.render(specificViewPath);
      });
    }
  });
});



export default app;