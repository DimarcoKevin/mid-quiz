var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var User = require('../models/User')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/', function(req, res, next) {
  mongoose.connect("mongodb+srv://admin:4LHnuS5arXwnsPWd@mid-quiz.7lejf07.mongodb.net/")
  const user = new User({
    user_id: 1,
    username: 'Testing',
    email: 'Testing@Domain.com',
    passwordHash: 'Nice Try',
    registration_date: new Date()
  });

  user.save();
  res.send('heyo')
  //res.render('testing stuffs', {title: 'testing'});
});

module.exports = router;
