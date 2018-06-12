const mongoose = require('mongoose');

const mongoConnect = function() { 
    mongoose.connection.openUri('mongodb://partiu:faccat123@ds257470.mlab.com:57470/partiu-faccat', (err, res) => {
        if (err) {
            console.log('Failed: ' + err);
        } else {
            console.log('Connected');
        }
    });
};

module.exports = mongoConnect;