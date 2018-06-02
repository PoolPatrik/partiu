var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/home', function(req, res) {
    res.render('pages/home');
});

app.get('/cadastro', function(req, res) {
    res.render('pages/cadastro');
});

app.listen(777);
console.log('777 is the magic port');