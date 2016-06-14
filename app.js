// Main fiel
var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function(req, res, next){
  res.send('it worked!');
});

app.get('/', function(req, res, next){
  console.log('it worked!');
  res.send('it worked!');
});

app.listen(3000);
