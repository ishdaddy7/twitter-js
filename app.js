// Main fiel
var express = require( 'express' );
var swig = require("swig");
var routes = require("./routes/");
var app = express(); // creates an instance of an express application
swig.setDefaults({ cache: false }); // added this for dev, since we'll be changing the file a lot. bad for production.

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use('/', routes);
/*
app.use(function(req, res, next){
  console.log("Request type: ", req.method);
  console.log("The route: ", req.path);
  next();
});*/

app.use(function(err, req, res, next){
  console.error(err);
});

app.listen(3000);
