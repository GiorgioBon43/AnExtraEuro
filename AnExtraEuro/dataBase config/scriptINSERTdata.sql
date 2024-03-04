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
    ('Progetto1', 'Progetto1', 'gio', 'Fumetto', 1000.00),
    ('Progetto2', 'Progetto2', 'paolo', 'Video Gioco', 2000.00),
    ('Progetto3', 'Progetto3', 'aronne', 'Gioco da tavolo', 3000.00),
    ('Progetto4', 'Progetto4', 'gio', 'Fumetto', 4000.00),
    ('Progetto5', 'Progetto5', 'paolo', 'Video Gioco', 5000.00);

INSERT INTO DONARE (ACCOUNT_NICKNAME, PROGETTO_ID, VALORE_DONAZIONE)
VALUES 
    ('gio', 1, 100.00),
    ('paolo', 1, 200.00),
    ('aronne', 1, 300.00),
    ('gio', 2, 400.00),
    ('paolo', 2, 500.00),
    ('aronne', 2, 600.00),
    ('gio', 3, 700.00),
    ('paolo', 3, 800.00),
    ('aronne', 3, 900.00),
    ('gio', 4, 1000.00),
    ('paolo', 4, 1100.00),
    ('aronne', 4, 1200.00),
    ('gio', 5, 1300.00),
    ('paolo', 5, 1400.00),
    ('aronne', 5, 1500.00);