// Main fiel
var express = require( 'express' );
var swig = require("swig");
var app = express(); // creates an instance of an express application
swig.setDefaults({ cache: false }); // added this for dev, since we'll be changing the file a lot. bad for production.

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


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
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  var obj = [{name: 'Fullstack'}, {name: 'App Academy'}];
  res.render( 'index', {title: 'Hall of Fame', people: people, sean: 'Hi Sean', jack: 'Hey Jack', obj: obj} );
});

app.use(function(err, req, res, next){
  console.log(err);
});

app.listen(3000);
