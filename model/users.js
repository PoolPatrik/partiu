module.exports = function() {
    var conexao = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var user = Schema({
        name: String,
        email: String,
        password: String
    });

    return conexao.model('users', user);
}