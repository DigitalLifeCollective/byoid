var express = require('express'),
    bodyParser = require('body-parser'),
    oauthserver = require('node-oauth2-server');
 
var app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.json());

const model = {
  // We support returning promises.
  getAccessToken: function() {
    return new Promise('works!');
  },

  // Or, calling a Node-style callback.
  getAuthorizationCode: function(done) {
    done(null, 'works!');
  },

  // Or, using generators.
  getClient: function(clientId, clientSecret, callback) {
    callback(null, "2YotnFZFEjr1zCsicMWpAA");
    return 'works!';
  },

  // Or, async/wait (using Babel).
  getUser: async function() {
    await somethingAsync();
    return 'works!';
  }
};

app.oauth = oauthserver({
  model, // See below for specification 
  grants: ['password'],
  debug: true
});
 
app.all('/oauth/token', app.oauth.grant());
 
app.get('/', app.oauth.authorise(), function (req, res) {
  res.send('Secret area');
});
 
app.use(app.oauth.errorHandler());
 
app.listen(3000);
