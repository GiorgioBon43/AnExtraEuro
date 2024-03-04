function redirectToLogin() {
    // Effettua una richiesta HTTP GET a /login
    fetch('/login', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /login
        window.location.href = '/login';
    });
}

function redirectToRegister() {
    // Effettua una richiesta HTTP GET a /register
    fetch('/signIn', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /register
        window.location.href = '/sigIn';
    });
}

function redirectToCreateCampain() {
    // Effettua una richiesta HTTP GET a /campainCreator
    fetch('/campainCreator', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /campainCreator
        window.location.href = '/campainCreator';
    });
}

function redirectToMyCampain(){
    // Effettua una richiesta HTTP GET a /myCampain
    fetch('/myCampains', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /myCampain
        window.location.href = '/myCampains';
    });
}

function redirectToLogout(){
    // Effettua una richiesta HTTP GET a /logout
    fetch('/logout', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /logout
        window.location.href = '/logout';
    });
}

function createCategories(){
    // Effettua una richiesta HTTP GET a /createCategories
    fetch('/createCategories', {
        method: 'GET',
    }).then(() => {
        // Dopo la richiesta, reindirizza l'utente a /createCategories
        window.location.href = '/createCategories';
    })
}