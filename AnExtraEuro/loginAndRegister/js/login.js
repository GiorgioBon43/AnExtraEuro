document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;

    const res = await fetch('/login/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    }).then(() => {
        window.location.href = '/login/log';
    });
});

function home() {
    fetch('/login/log', {
        method: 'GET'
    }).then(() => {
        window.location.href = '/';
    });
}
