// Main fiel
var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function(req, res, next){
  next();
});

app.get('/news', function(req, res, next){
  console.log('logging the news');
  res.send('sending the news');
});

app.get('/', function(req, res, next){
  console.log('it worked!');
  res.send('it worked!');
});


app.listen(3000);
