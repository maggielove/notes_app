'use strict';
let express = require('express');
let logger = require('morgan');
let request = require('request');
let path = require('path');
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let User = require('./models/user');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notesApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', (callback) => {
  console.log('Mongoose connected.');
});

// app.get('/', function(req, res) {
//   console.log('hit /');
//   res.send('hello!');
// })


// let userRoutes = require('./controllers/users_controller');
// let noteRoutes = require('./controllers/notes_controller');

//Register routes
// app.use('/users', userRoutes); //all routes starting with /users in users_controller
// app.use ('/notes', noteRoutes);  //all routes starting with /notes in notes_controller

let server = app.listen(process.env.PORT || 3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('express running', host, port);

})
