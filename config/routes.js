'use strict';
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser') //for the POST route
    // methodOverride = require('method-override'); //for the POST route

var notesController = require('../controllers/notes');
var usersController = require('../controllers/users');

// http://localhost:3000/notes
router.route('/notes')

  // all HTTP verbs associated with notes route
  .get(notesController.findAll)

// router.route('/users')
  // .get(usersCtonroller.findAll)

///// WILL EVERY ROUTE BENEATH THIS BE RESTRICTED TO USERS WITH TOKENS?//////
router.route('/users/authenticate')
  .post(usersController.authenticate)




module.exports = router
