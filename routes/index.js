var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(io){

  router.use(express.static('public'));

  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, userName: 'Suit Guy', showForm: true } );
    //console.log(tweets);
  });

  router.post('/tweets', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400);
    io.sockets.emit('new_tweet', {name: req.body.name, text:req.body.text});
    tweetBank.add(req.body.name, req.body.text);
    res.redirect('/');
  });


  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    //console.log(name);
    var list = tweetBank.find( {name: name} );
    res.render( 'profile', { tweets: list, userName: name, showForm: true  } );
  });

  router.get('/tweets/:id', function(req, res){
    var thisID = +req.params.id;
    var list = tweetBank.find({id: thisID});
    res.render('profile', {tweets: list, userName: list[0].name});
  });

  router.use(function(err, req, res, next){
    console.error(err);
  });
  return router;
}
//module.exports = router;
