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
const specificViewPath3 = path.join(__dirname, 'pages', 'register.pug');

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

app.get('/login/log', (req, res) => {});

app.post('/login/log', express.json(), (req, res) => { // Modifica questa linea
	console.log('Dati ricevuti dallo zio pino:', req.body);
  const { username, email, password } = req.body;
  // Esegui la query SQL per verificare se i dati esistono nel database
  const query = 'SELECT * FROM ACCOUNT WHERE NICKNAME = ? AND EMAIL = ? AND PASSWORD = ?';
  console.log('Query SQL:', query);
  database.query(query, [username, email, password], (error, results) => {
    console.log('Sono dentro la query');
    if (error) {
        console.error('Errore nella query SQL:', error);
        return res.status(500).send('Errore interno del server');
    }

    if (results.length > 0) {
        // Esegui il reindirizzamento o l'invio della risposta al client
        req.session.loggedIn = true;
        res.render(specificViewPath, { loggedIn: req.session.loggedIn });
    } else {
        // I dati non esistono nel database
        res.status(404).send('I dati non esistono nel database');
    }
  });
  console.log('Sono fuori la query');
});

export default app;