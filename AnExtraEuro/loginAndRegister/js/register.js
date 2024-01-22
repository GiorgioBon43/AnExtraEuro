document.querySelector('form').addEventListener('submit', async function (e) {
	e.preventDefault();
    const username = document.querySelector("input[name='username']").value;
	const email = document.querySelector("input[name='email']").value;
	const password1 = document.querySelector("input[name='password1']").value;
	const password2 = document.querySelector("input[name='password2']").value;

	if (password1 == password2) {
		const res = await fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({username, email, password1}),
		});
		const data = await res.json();
		if(data.status === 'success') {
			window.location.href = '/pages/login.pug';
		}
	}
	else{
		alert("Le password non coincidono");
	}
});
