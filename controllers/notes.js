'use strict';
var Note = require('../models/note');
let request = require('request');

//Get
function findAll(request, response) {
  Note.find(function(error, notes) {
    if (error) response.json({ message: 'No notes found.' });

    response.json({ notes: notes });
  });
} //ends findAll

// Show a single note
function showSingle(request, response) {
  let id = request.params.id;
  Note.find( {_id: id}, function(error, note) {
    if (error) response.json({ message: 'Unable to find the note you are looking for.'});

    response.json({note: note })
  })
}

module.exports = {
  findAll: findAll,
  showSingle: showSingle
}
