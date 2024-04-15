document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const nomeCategoria = document.querySelector("input[name='nomeCategoria']").value;
    const descrizione = document.querySelector("input[name='descrizione']").value;

    const res = await fetch('/createCategories/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeCategoria, descrizione}),
    }).then(() => {
        window.location.href = '/';
    });
});

function home() {
    fetch('/login/log', {
        method: 'GET'
    }).then(() => {
        window.location.href = '/';
    });
}
