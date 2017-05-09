var express = require('express')
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/publics'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);

app.listen(port);
