const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

//connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static("./public"));

app.use(bodyParser.json());

// error handling
app.use(function(err, req, res, next){
    // console.log(error);
    res.status(err.statusCode).send(err);
});

// initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4200, function() {
    console.log('now listening for requests.');
});