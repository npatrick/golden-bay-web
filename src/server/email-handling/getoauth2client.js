const fs = require('fs');
const googleAuth = require('google-auth-library');

module.exports = function(cb) {
  fs.readFile('client_secret.json', (err, data) => {
    if (err) {
      return err;
    }
    var credentials = JSON.parse(data),
        clientSecret = credentials.installed.client_secret,
        clientId = credentials.installed.client_id,
        redirectUrl = credentials.installed.redirect_uris[0],
        auth = new googleAuth(),
        oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    
    fs.readFile('gmail-credentials.json', (err, token) => {
      if (err) {
        return cb(err);
      } else {
        oauth2Client.credentials = JSON.parse(token);
        return cb(null, oauth2Client);
      }
    });
  });
};
