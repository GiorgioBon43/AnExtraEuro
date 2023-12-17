import app from './app.js';
import database from './config/dataBase.js';

app.get('/', (req, res) => {
    const cookieName = 'cookiePresente';
    const cookieValue = false;
    const cookieOptions = {
        maxAge: 0, // durata illimitata
        httpOnly: true,
    };
    
    res.cookie(cookieName, cookieValue, cookieOptions);
  });

const PORT = 3000;

database.connect((err) => {
	if (err) {
		console.error('Errore di connessione al database:', err);
		return;
	}
	console.log('Connessione al database avvenuta con successo!');
});

const server = app.listen(PORT, () => {
	console.log(`app running on PORT http://localhost:${PORT}`);
});
