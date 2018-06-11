var express = require('express');
var router = express.Router();
var model = require('./../model/users');
const mongoConnect = require('../libs/connect_db');	

mongoConnect();

router.get('/', function(req, res, next) {
  res.render('../views/pages/index.ejs');
});

router.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  model.findOne({email: email, password: password}, function(err, user){
    if(err){
      return res.status(500).send();
    }
  
    if(!user){
      return res.status(401).send();
    }
  
    res.redirect('/home');
  });
});

module.exports = router;