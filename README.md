AnExtraEuro
=========

PROBLEMA:
---------
La mancanza di fondi o finanziatori per la realizzazione di una propria start up, o un idea di qualunque genere, che sia o meno a scopo lucrativo

DESCRIZIONE SOLUZIONE:
----------------------
La realizzazione di una WebApp per il crowfounding, dove chiunque può 
+ donare una somma di denaro, che sia grande o piccola.
+ postare la prorpia idea e raccimolare i soldi necessari per realizzarla.

TARGET:
-------
Le persone che necessitano di fondi per la realizzazione della prorpia idea

FUNZIONI:
---------
FRONT-END:
> - Creazione di un account.
> - Creazione di una campagna/ un progetto per crowdfunding.
> - Donare ad un crowdfunding.
> - Visualizzare quanto è stato donato al mio progetto.
> - Visualizzare i fondi ai quali ho donato.
> - Ricerca di un progetto o di una categoria specifica di progetti.
> - Modificare il proprio progetto, per postere eventuali avanzamenti o modifiche

BACK-END:
> - Eliminazione di un progetto
> - Modificare un progetto
> - Eliminare un account
> - Visualizzazione dei soldi che un progetto ha ricevuto e riscattato
> - Vedere quale account ha donato e quanto ad un determinato progetto


SCHEMA E/R:
-----------
![Aggiungi corpo del testo](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/6e93c559-1d3c-48c9-9c88-438364a37f25)

SCHEMA LOGICO:
--------------
- Account(Nickname, Password, Email, Abilitato)
- Amministartore (Nickname, Password, Email, Abilitato)
- Progetto(Id, Titolo, Immagine, Descrizione, Obbiettivo, Account_nickname, Categoria_nominativo)
- Categoria(Id, descrizione)
- Donare(Account_nickname, Progetto_ID, Valore_Donazione, Data_Donazione)

GRAFICA:
--------

![ProgettoCreazione](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/a991c027-e0f4-46f4-a04e-420f9b230d3e)
![Ricerca](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/be021493-f21c-4434-85ee-593f21bf3176)
![Account](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/68d7897a-6b31-4ae2-a3d8-21c185c52c05)
![CreazioneAccount](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/ef19a364-846e-46cd-a0c8-acf315f884de)
![home](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/1da93849-766e-4c1f-823a-2642fc5c04ff)


Requisiti
------------
+ + MySQL Server >= 5.6 (you can install XAMP https://www.apachefriends.org/it/download.html)
+ + Node.js
+ Per far si che la WebApp funzioni, sono richiesti dei framework, che vanno instllati tramite il file 'InstallaLibrerie.bat'. Il procedimento per eseguirlo è spiegato nella sezione 'Run'.
+ Elenco framework che verranno installati:
+ + Express - Install with command: npm install express --save.
+ + Express Sessions - Install with command: npm install express-session --save.
+ + JWT - Install with command: npm install jsonwentoken.
+ + MySQL for Node.js - Install with command: npm install mysql --save.
+ + React latest version -  Install with command: npm i react@latest react-dom@latest

Run
----
+ start Server MySQL from XAMP 
+ (from the command promt):
+ + cd path/del/progetto
+ + InstallaLibrerie.bat
+ + npm start
+ http://localhost:3000/

