AnExtraEuro
-----------

PROBLEMA:
=========
La mancata assenzqa di fondi o finanziatori per la realizzazione di una propria start up, o un idea di qualunque genere, che sia o meno a scopo lucrativo

DESCRIZIONE SOLUZIONE:
============
La realizzazione di una WebApp per il crowfounding, dove chiunque può 
+ donare una somma di denaro, che sia grande o piccola.
+ postare la prorpia idea e raccimolare i soldi necessari per realizzarla.

TARGET:
=======
Le persone che necessitano di fondi per la realizzazione della prorpia idea

FUNZIONI:
=========
> FRONT-END:
>> - Creazione di un account.
>> - Creazione di una campagna/ un progetto per crowdfunding.
>> - Donare ad un crowdfunding.
>> - Visualizzare quanto è stato donato al mio progetto.
>> - Visualizzare i fondi ai quali ho donato.
>> - Ricerca di un progetto o di una categoria specifica di progetti.
>> - Modificare il rproprio progetto, per postere eventuali avanzamenti o modifiche

BACK-END:
``` markdown
- Eliminazione di un progetto
- Modificare un progetto
- Bloccare un account temporaneamente
- Eliminare un accoint
- Visualizzazione dei soldi che un progetto ha ricevuto e riscattato
- Vedere qale account ha donato e quanto ad un determinato progetto
```

SCHEMA E/R:
===========
![E R](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/d500f12d-046b-48d2-a8a4-4bba07eb72cf)

SCHEMA LOGICO:
==============
- Account(nickname, password, email)
- Progetto(ID, numero donatori, fondo, Account_nickname, Categoria_nominativo)
- Categoria(nominativo)
- Donare(Account_nickname, Progetto_ID, valore donazione)

GRAFICA:
========

![ProgettoCreazione](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/a991c027-e0f4-46f4-a04e-420f9b230d3e)
![Ricerca](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/be021493-f21c-4434-85ee-593f21bf3176)
![Fondo](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/9b399270-e157-40fe-b2e7-fa35d246944f)
![Account](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/68d7897a-6b31-4ae2-a3d8-21c185c52c05)
![CreazioneAccount](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/ef19a364-846e-46cd-a0c8-acf315f884de)
![home](https://github.com/Giorgiobon/AnExtraEuro/assets/101709335/1da93849-766e-4c1f-823a-2642fc5c04ff)
