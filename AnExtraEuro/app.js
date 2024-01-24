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
const specificViewPath4 = path.join(__dirname, 'pages', 'campainCreator.pug');
const specificViewPath5 = path.join(__dirname, 'pages', 'myCampains.pug');
const specificViewPath6 = path.join(__dirname, 'pages', 'viewCampain.pug');

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
  req.session.data = req.session.data || null;
  res.render(specificViewPath, { loggedIn: req.session.loggedIn, data: req.session.data });
});

app.get('/login', (req, res) => {
  res.render(specificViewPath2);
});

app.get('/sigIn', (req, res) => {
  res.render(specificViewPath3);
});

app.get('/logout', (req, res) => {
  // Usa il metodo destroy per eliminare la sessione
  req.session.destroy(err => {
    if (err) {
      console.error('Errore durante la distruzione della sessione:', err);
      res.status(500).send('Errore durante la distruzione della sessione');
    } else {
      res.redirect('/');
    }
  });
});

app.get('/login/log', (req, res) => {
  res.render(specificViewPath, { loggedIn: req.session.loggedIn, data: req.session.data });
});

app.get('/sigIn/create', (req, res) => {
  res.render(specificViewPath);
});

app.get('/campainCreator', (req, res) => {
  res.render(specificViewPath4, { data: req.session.data });
});

app.get('/campaignCreator/create', (req, res) => {
  res.render(specificViewPath, {loggedIn: req.session.loggedIn, data: req.session.data });
});

app.get('/categorie', (req, res) => {
  const query = 'SELECT NOMINATIVO FROM CATEGORIA';

  database.query(query, (err, result) => {
    if (err) {
      console.error('Errore nella query:', err);
      res.status(500).send('Errore del server');
    } else {
      const categorie = result.map(row => row.NOMINATIVO);
      res.json({ categorie });
    }
  });
});

app.get('/myCampains', (req, res) => {
  const query = `SELECT * FROM PROGETTO WHERE ACCOUNT_NICKNAME = ?`;
  database.query(query, [req.session.data], (err, results) => {
    if (err) {
      console.error('Errore nella query SQL:', err);
      throw err;
    }
    res.render(specificViewPath5, { campaigns: results, data: req.session.data });
  });
});

app.get('/viewCampaign/:id', (req, res) => {
  const campaignId = req.params.id;
  const query = 'SELECT * FROM PROGETTO WHERE ID = ?';

  database.query(query, [campaignId], (err, result) => {
    if (err) {
      console.error('Errore nella query SQL:', err);
      return res.status(500).send('Errore del server');
    }

    const projectData = result[0];
    res.render(specificViewPath6, {projectData: projectData, data: req.session.data });
  });
});

app.post('/login/log', express.json(), (req, res) => {
  const { username, email, password } = req.body;
  // Esegui la query SQL per verificare se i dati esistono nel database
  const query = 'SELECT * FROM ACCOUNT WHERE NICKNAME = ? AND PASSWORD = ?';
  database.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Errore nella query SQL:', error);
      return res.status(500).send('Errore interno del server');
    }

    if (results.length > 0) {
      req.session.loggedIn = true;
      req.session.data = username;
      return res.render(specificViewPath, { loggedIn: req.session.loggedIn, data: req.session.data });
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
      return res.status(500).send('L\'email esiste già nel database');
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

app.post('/campaignCreator/create', express.json(), (req, res) => {
  const { nomeProgetto, obbiettivo, categoria, descrizione } = req.body;
  const insertQuery = 'INSERT INTO PROGETTO (NOME, DESCRIZIONE, ACCOUNT_NICKNAME, CATEGORIA_NOMINATIVO, OBBIETTIVO) VALUES (?, ?, ?, ?, ?)';
  database.query(insertQuery, [nomeProgetto, descrizione, req.session.data, categoria, obbiettivo], (insertError, insertResults) => {
    if (insertError) {
      console.log(insertError);
      return res.status(500).json({ error: 'Errore durante l\'inserimento nella tabella PROGETTO.' });
    }
      if (insertResults.length > 0) {
        return res.render(specificViewPath, { loggedIn: req.session.loggedIn, data: req.session.data });
      } else {
        return res.status(404).send('I dati non esistono nel database');
      }
  });
});

app.delete('/deleteCampaign/:id', (req, res) => {
  const campaignId = req.params.id;
  const query = 'DELETE FROM PROGETTO WHERE ID = ?';
  
  database.query(query, [campaignId], (err, result) => {
    if (err) {
      console.error('Errore nella query SQL:', err);
      return res.status(500).json({ error: 'Errore nella query SQL' });
    }

    console.log('Riga eliminata con successo:', result);
    res.json({ message: 'Campagna eliminata con successo' });
  });
});

export default app;