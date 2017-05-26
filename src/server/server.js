const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const PORT = process.env.PORT || 3000;

// Create the Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../public/')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../public/')));

app.post('/send_message', (req, res) => {
	console.log('POST INCOMING: ', req.body);
	let name = req.body.name;
	let emailAddress = req.body.email;
	let msg = req.body.message;

	// code the execution of receiving the post request
});

app.listen(PORT, () => console.log('Listening on PORT ' + PORT + '!'));
