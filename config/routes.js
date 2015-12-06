'use strict';
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser') //for the POST route
var methodOverride = require('method-override'); //lets you use PUT, DELETE where client doesn't support it.

var notesController = require('../controllers/notes');
var usersController = require('../controllers/users');
var chaptersController = require('../controllers/chapters')

// http://localhost:3000/notes
router.route('/notes')

  // all HTTP verbs associated with notes route
  .get(notesController.findAll)

  //add a new note
  .post(notesController.writeNote)

// view an individual note
router.route('/notes/:id')
  .get(notesController.showSingle)
  // console.log('response.data.note: ' + response.data.note)

  .delete(notesController.discardNote)

  .put(notesController.updateNote)

// router.route('/users')
  // .get(usersCtonroller.findAll)

router.route('/chapters')
  .get(chaptersController.findAll)

router.route('/chapters/:id')
  .put(chaptersController.changeNotesList)

///// WILL EVERY ROUTE BENEATH THIS BE RESTRICTED TO USERS WITH TOKENS?//////
// user log in route
router.route('/users/authenticate')
  .post(usersController.authenticate)




module.exports = router
