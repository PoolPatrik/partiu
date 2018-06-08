var express = require('express');
var router = express.Router();
var model = require('./../model/users')();

router.get('/', function(req, res, next) {
  model.find(null, function(err, users){
    if (err){
      throw err;
    }
    res.render('../views/pages/cadastro.ejs');
  });
});

router.post('/cadastrar', function(req, res, next){
  var body = req.body;
  body.status = false;
  model.create(body, function(err, user){
    if (err){
      throw err;
    }
    res.redirect('/');
  })
});

module.exports = router;