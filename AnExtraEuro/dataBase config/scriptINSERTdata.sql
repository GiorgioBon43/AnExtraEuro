INSERT INTO ACCOUNT (NICKNAME, EMAIL, PASSWORD, ABILITATO)
VALUES 
    ('user1', 'user1@example.com', 'password1', FALSE),
    ('user2', 'user2@example.com', 'password2', TRUE),
    ('user3', 'user3@example.com', 'password3', FALSE),
    ('user4', 'user4@example.com', 'password4', FALSE),
    ('user5', 'user5@example.com', 'password5', FALSE);

INSERT INTO CATEGORIA (NOMINATIVO, DESCRIZIONE)
VALUES 
    ('Category1', 'Description for Category1'),
    ('Category2', 'Description for Category2'),
    ('Category3', 'Description for Category3');

INSERT INTO PROGETTO (NOME, DESCRIZIONE, ACCOUNT_NICKNAME, CATEGORIA_NOMINATIVO, OBBIETTIVO)
VALUES 
    ('Project1', 'Description for Project1', 'user1', 'Category1', 1000),
    ('Project2', 'Description for Project2', 'user2', 'Category2', 2000),
    ('Project3', 'Description for Project3', 'user3', 'Category3', 3000),
    ('Project4', 'Description for Project4', 'user4', 'Category1', 4000),
    ('Project5', 'Description for Project5', 'user5', 'Category2', 5000);

INSERT INTO DONARE (ACCOUNT_NICKNAME, PROGETTO_ID, VALORE_DONAZIONE)
VALUES 
    ('user1', 1, 100.50),
    ('user2', 2, 200.75),
    ('user3', 3, 300.25),
    ('user4', 4, 400.00),
    ('user5', 5, 500.50);
