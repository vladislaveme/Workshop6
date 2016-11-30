// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
// Defines what happens when it receives the `GET /` request
app.get('/',function(req, res) {
  res.send('Hello World!');
});
// Starts the server on port 3000!
app.listen(3000,function() {
  console.log('Example app listening on port 3000!');
});

var reverseString = require('./util').reverseString;
// Handle POST /reverse [data]
var bodyParser = require('body-parser');
app.use(bodyParser.text());
app.post('/reverse',function(req, res) {
  if(typeof(req.body) === 'string') {
    var reversed = reverseString(req.body);
    res.send(reversed);
  }
  else{
    res.status(400).end();
  }
});
