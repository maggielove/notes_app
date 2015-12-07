'use strict';
let express = require('express');
let logger = require('morgan');
let request = require('request');
let path = require('path');
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
// let angularQuill = require("angular-quill");
// let bootstrap = require('bootstrap');

let app = express();

let mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notesApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', (callback) => {
  console.log('Mongoose connected.');
});

let routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
// with extended: true, req.body key value pairs don't have to be either string or array
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/', routes);

let server = app.listen(process.env.PORT || 3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('express running', host, port);

})
