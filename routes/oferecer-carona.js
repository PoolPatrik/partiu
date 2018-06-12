var express = require('express');
var router = express.Router();
var model = require('./../model/caronas');

router.get('/', function(req, res, next) {
  res.render('../views/pages/oferecer-carona.ejs');
});

router.post('/cadastrar', function(req, res, next){
  var body = req.body;
  body.status = false;

  var object = {
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    segunda: req.body.segunda ? true : false,
    terca: req.body.terca ? true : false,
    quarta: req.body.quarta ? true : false,
    quinta: req.body.quinta ? true : false,
    sexta: req.body.sexta ? true : false,
    sabado: req.body.sabado ? true : false
  }

  model.create(object, function(err, carona){
    if (err){
      throw err;
    }
    res.redirect('/home');
  })
});

module.exports = router;