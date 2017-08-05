const fs = require('fs');
const googleAuth = require('google-auth-library');

function getAuthorizationToken(code, cb) {
  // Load client secrets
  fs.readFile('client_secret.json', function(err, data) {
    if (err) {
      return cb(err);
    }
    var credentials = JSON.parse(data),
        clientSecret = credentials.installed.client_secret,
        clientId = credentials.installed.client_id,
        redirectUrl = credentials.installed.redirect_uris[0],
        auth = new googleAuth(),
        oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        return cb(err);
      }
      var file = 'gmail-credentials.json';

      fs.writeFile(file, JSON.stringify(token));
      return cb(null, file);
    });
  });
}

if (process.argv.length != 3) {
  console.log('usage: node get_token token');
  process.exit(1);
}
const token = process.argv[2];

getAuthorizationToken(token, function(err, file) {
  if (err) {
    console.log('err:', err);
  } else {
    console.log('authorization token is in:\n', file);
  }
});
