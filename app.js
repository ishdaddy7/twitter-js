// Main fiel
var express = require( 'express' );
var swig = require("swig");
var app = express(); // creates an instance of an express application



app.use(function(req, res, next){
  console.log("Request type: ", req.method);
  console.log("The route: ", req.path);
  next();
});

app.use("/special",function(req, res, next){
  console.log("Request type #2: ", req.method);
  console.log("The route #2: ", req.path);
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
