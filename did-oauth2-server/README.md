# BYOID OAuth2 Server

## How to install
Make sure you have node and npm installed. Then run

```
npm install
```

Make sure you have [MongoDB](https://www.mongodb.com/) installed and running.

Run the Mongo command line interface
```
mongo
```

Enter the following commands to create a test client record:

```
use did-oauth2-server
db.oauthclients.insert({ clientId: 's6BhdRkqt3', clientSecret: 'gX1fBat3bV', redirectUri: 'http://somewebsite.com/some-path-here' });
```

## To Run in Development Mode use Nodemon!

```
node_modules/nodemon/bin/nodemon.js server.js
```
