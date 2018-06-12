var express = require('express');
var router = express.Router();
var model = require('./../model/caronas');

router.get('/', function(req, res, next) {
  //res.render('../views/pages/home.ejs');
  model.find(null, function(err, caronas){
    if (err) {
      throw err;
    }

    res.render('../views/pages/home.ejs', {caronas: caronas});
  });
});

module.exports = router;