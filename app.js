var express = require('express');
var db = require('./db');
var app = express();

// Configure app
app.set('port', process.env.PORT || 8080);

// Add middlewares

// Add routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
