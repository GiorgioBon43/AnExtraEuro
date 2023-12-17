import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import * as url from 'url';
/*import viewRouter from './routes/viewRoutes.js';*/

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.set('view engine', 'pug');
const specificViewPath = path.join(__dirname, 'pages', 'index.pug');
const specificViewPath2 = path.join(__dirname, 'pages', 'login.pug');


app.get('/acceduto', (req, res) => {
        const datiDaPassare = {
            utente: { nome: 'John', cognome: 'Doe' }
        };    
        res.cookie('cookiePresente', true);
        res.render(specificViewPath, datiDaPassare);
});

app.get('/', (req, res) => {
    res.render(specificViewPath);
}); 

app.get('/login', (req, res) => {
    res.render(specificViewPath2);
});


// global middlewares
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

export default app;
