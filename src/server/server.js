const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const getOAuth2Client = require('./email-handling/getoauth2client.js');
const sendMail = require('./email-handling/send_email.js');

const PORT = process.env.PORT || 3000;

// Create the Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public/')));

app.post('/send_message', (req, res) => {
	console.log('POST INCOMING: ', req.body);
	let name = req.body.name;
	let emailAddress = req.body.email;
	let subject = 'GB Website Email';
	let msg = req.body.message;

	// code the execution of receiving the post request
	getOAuth2Client(function(err, oauth2Client) {
	  if (err) {
	    console.log('err:', err);
	    res.status(500).send('Internal Server Error');
	  } else {
	    sendMail(name, emailAddress, subject, msg, oauth2Client, function(err, results) {
	      if (err) {
	        console.log('err: ', err);
	      } else {
	      	console.log('SERVER SIDE RESULT: ', results);
	        res.status(200).send('Sent!');
	      }
	    });
	  }
	});
});

app.listen(PORT, () => console.log('Listening on PORT ' + PORT + '!'));
