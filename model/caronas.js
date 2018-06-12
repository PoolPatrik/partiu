var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var carona = Schema({
    cidade: String,
    bairro: String,
    segunda: Boolean,
    terca: Boolean,
    quarta: Boolean,
    quinta: Boolean,
    sexta: Boolean,
    sabado: Boolean
});

module.exports = mongoose.model('caronas', carona)