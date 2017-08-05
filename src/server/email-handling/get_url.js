const fs = require('fs');
const googleAuth = require('google-auth-library');
const scopes = require('./scopes');

function getAuthorizationUrl(cb) {
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
        oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl),
        authUrl = oauth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: scopes
        });
    return cb(null, authUrl);
  });
}

getAuthorizationUrl(function(err, url) {
  if (err) {
    console.log('err:', err);
  } else {
    console.log('Authorization url is:\n', url);
  }
});
  