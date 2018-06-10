var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var user = Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('users', user)