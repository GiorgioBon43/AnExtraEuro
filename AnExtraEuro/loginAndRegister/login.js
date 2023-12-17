
// http://localhost:3000/login
app.post('/login', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
    let email = request.body.email;
	// Ensure the input fields exists and are not empty
	if (username && password && email) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM account WHERE NICKNAME = ? AND PASSWORD = ? AND EMAIL = ?', [username, password, email], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/acceduto');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});