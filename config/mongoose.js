const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashishkumarsamantara:chandan@cluster0.vrznndw.mongodb.net/placementcell');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in database connection!!!'));

db.once('open', () => {
    console.log('Connection to database is succesfull.');
});

module.exports = db;