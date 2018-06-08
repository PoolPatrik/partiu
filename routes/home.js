var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../views/pages/home.ejs');
});

module.exports = router;