document.querySelector('form').addEventListener('submit', async function (e) {
	e.preventDefault();
    const username = document.querySelector("input[name='username']").value;
	const email = document.querySelector("input[name='email']").value;
	const password = document.querySelector("input[name='password']").value;

    console.log(username, email, password);

    const res = await fetch('/login/log', {
		method: 'GET',
	}).then(() => {
		window.location.href = '/login/log';
	});
});

