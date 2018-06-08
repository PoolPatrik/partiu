const mongoose = require('mongoose');
var conexao;

module.exports = function() {
    if (!conexao){
        conexao = mongoose.createConnection('mongodb://localhost/partiu');
    }
    return conexao;
}