var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, userName: 'Suit Guy' } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  //console.log(name);
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, userName: name } );
});

router.use(function(err, req, res, next){
  console.error(err);
});

module.exports = router;
