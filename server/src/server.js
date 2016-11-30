var express = require('express');
// Creates an Express server.
var app = express();
// Starts the server on port 3000!
app.listen(3000,function() {
  console.log('Example app listening on port 3000!');
});
app.use(express.static('../client/build'));
// Handle POST /reverse [data]
var bodyParser = require('body-parser');
app.use(bodyParser.text());
