document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.querySelector("input[name='username']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const confermaPassword = document.querySelector("input[name='confermaPassword']").value;

    if(password == confermaPassword){
        const res = await fetch('/sigIn/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        }).then(() => {
            window.location.href = '/sigIn/create';
        });
    }else{
        alert("Le password non coincidono");
    }
});
