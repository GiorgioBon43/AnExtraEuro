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

INSERT INTO PROGETTO (NOME, DESCRIZIONE, ACCOUNT_ID, CATEGORIA_NOMINATIVO, OBBIETTIVO) 
VALUES 
    ('La Grande Avventura del Fumetto Incantato', 'Un avventura epica nel mondo dei fumetti', 1, 'Fumetto', 1000.00), 
    ('La Corsa all Impero Virtuale', 'Un gioco di strategia ambientato in un universo virtuale', 2, 'Video Gioco', 2000.00), 
    ('L Era dei Re: Conquista e Gloria', 'Un gioco da tavolo di conquista e dominio', 3, 'Gioco da tavolo', 3000.00), 
    ('La Saga degli Eroi Mascherati', 'Una storia avvincente di supereroi e avventure', 1, 'Fumetto', 4000.00), 
    ('Il Mondo Perduto: Odissea nel Cyberspazio', 'Esplora un mondo virtuale pieno di misteri e pericoli', 2, 'Video Gioco', 5000.00),
    ('Avventura nella Foresta Proibita', 'Una storia avventurosa tra creature magiche', 1, 'Fumetto', 1500.00),
    ('Battaglia per il Trono Virtuale', 'Strategia e conquista in un mondo virtuale', 2, 'Video Gioco', 2500.00),
    ('Regno degli Dei: Sfida Eterna', 'Un gioco da tavolo epico con divinità', 3, 'Gioco da tavolo', 3500.00),
    ('Le Ombre del Fumetto Perduto', 'Un fumetto misterioso con una trama oscura', 1, 'Fumetto', 4500.00),
    ('L Apocalisse Virtuale', 'Sopravvivi in un mondo digitale post-apocalittico', 2, 'Video Gioco', 5500.00),
    ('La Guerra dei Mondi Fantastici', 'Un fumetto di guerre tra mondi fantastici', 1, 'Fumetto', 2000.00),
    ('Impero delle Galassie Virtuali', 'Conquista galassie in un gioco di strategia', 2, 'Video Gioco', 3000.00),
    ('L Ascesa dei Regni: Tavolo di Battaglia', 'Un gioco da tavolo di conquista', 3, 'Gioco da tavolo', 4000.00),
    ('Gli Eroi del Fumetto Eterno', 'Un fumetto di eroi immortali', 1, 'Fumetto', 5000.00),
    ('Odissea Spaziale Virtuale', 'Un esplorazione spaziale in un gioco virtuale', 2, 'Video Gioco', 6000.00),
    ('La Rivolta dei Regni Incantati', 'Un gioco da tavolo di ribellioni e magie', 3, 'Gioco da tavolo', 4500.00),
    ('L Alleanza degli Eroi del Fumetto', 'Una coalizione di eroi contro il male', 1, 'Fumetto', 2500.00),
    ('Cyber Dominio: La Sfida Virtuale', 'Un gioco di dominio in un cyberspazio', 2, 'Video Gioco', 3500.00),
    ('La Corona dei Re: Tavolo di Sfide', 'Un gioco da tavolo con re e regni', 3, 'Gioco da tavolo', 5000.00),
    ('Gli Eroi Oscuri del Fumetto', 'Un fumetto di antieroi e battaglie oscure', 1, 'Fumetto', 5500.00),
    ('La Frontiera Virtuale', 'Esplora e conquista la frontiera virtuale', 2, 'Video Gioco', 7000.00),
    ('La Rovina dei Regni: Gioco da Tavolo', 'Un gioco da tavolo di rovina e resurrezione', 3, 'Gioco da tavolo', 6000.00);

INSERT INTO DONARE (ACCOUNT_ID, PROGETTO_ID, VALORE_DONAZIONE)
VALUES 
    (2, 1, 200.00),
    (3, 1, 300.00),
    (1, 2, 400.00),
    (3, 2, 600.00),
    (1, 3, 700.00),
    (2, 3, 800.00),
    (2, 4, 1100.00),
    (3, 4, 1200.00),
    (1, 5, 1300.00),
    (1, 5, 1500.00);