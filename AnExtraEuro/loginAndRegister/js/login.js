document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.querySelector("input[name='username']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;

	console.log(username, email, password);

    let requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Verifica se il metodo è diverso da GET, in tal caso include il corpo
    if (requestOptions.method !== 'GET') {
        requestOptions.body = JSON.stringify({ username, email, password });
    }

    const res = await fetch('/login/log', requestOptions);
});
