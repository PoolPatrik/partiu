const mongoose = require('mongoose');

const mongoConnect = function() { 
    mongoose.connection.openUri('mongodb://localhost/partiu', (err, res) => {
        if (err) {
            console.log('Failed: ' + err);
        } else {
            console.log('Connected');
        }
    });
};

module.exports = mongoConnect;