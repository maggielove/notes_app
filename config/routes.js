'use strict';
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser') //for the POST route
    // methodOverride = require('method-override'); //for the POST route

var notesController = require('../controllers/notes');

// http://localhost:3000/notes
router.route('/notes')

  // all HTTP verbs associated with notes route
  // .get( function(req, res){
  //   console.log('hit /notes');
  // })
.get(notesController.findAll)


    // res.send('hullo');



module.exports = router
