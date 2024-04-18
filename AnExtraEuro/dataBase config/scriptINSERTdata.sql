INSERT INTO ACCOUNT (NICKNAME, EMAIL, PASSWORD, ABILITATO)
VALUES 
    ('gio', 'gio@io.com', 'io', TRUE),
    ('paolo', 'paolo@io.com', 'tu', FALSE),
    ('aronne', 'aronne@io.com', 'egli', FALSE);

INSERT INTO CATEGORIA (NOMINATIVO, DESCRIZIONE)
VALUES 
    ('Fumetto', 'Libro con vignete'),
    ('Video Gioco', 'Gioco digitale'),
    ('Gioco da tavolo', 'Gioco cartaceo');

INSERT INTO PROGETTO (NOME, DESCRIZIONE, ACCOUNT_NICKNAME, CATEGORIA_NOMINATIVO, OBBIETTIVO) 
VALUES 
    ('La Grande Avventura del Fumetto Incantato', 'Un avventura epica nel mondo dei fumetti', 'gio', 'Fumetto', 1000.00), 
    ('La Corsa all Impero Virtuale', 'Un gioco di strategia ambientato in un universo virtuale', 'paolo', 'Video Gioco', 2000.00), 
    ('L Era dei Re: Conquista e Gloria', 'Un gioco da tavolo di conquista e dominio', 'aronne', 'Gioco da tavolo', 3000.00), 
    ('La Saga degli Eroi Mascherati', 'Una storia avvincente di supereroi e avventure', 'gio', 'Fumetto', 4000.00), 
    ('Il Mondo Perduto: Odissea nel Cyberspazio', 'Esplora un mondo virtuale pieno di misteri e pericoli', 'paolo', 'Video Gioco', 5000.00);


INSERT INTO DONARE (ACCOUNT_NICKNAME, PROGETTO_ID, VALORE_DONAZIONE)
VALUES 
    ('paolo', 1, 200.00),
    ('aronne', 1, 300.00),
    ('gio', 2, 400.00),
    ('aronne', 2, 600.00),
    ('gio', 3, 700.00),
    ('paolo', 3, 800.00),
    ('paolo', 4, 1100.00),
    ('aronne', 4, 1200.00),
    ('gio', 5, 1300.00),
    ('aronne', 5, 1500.00);