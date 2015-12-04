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
    console.log("note" + note)
  })
}

// write a new note
function writeNote(request, response) {
  let note = new Note(response.body);

  note.save(function(error) {
    if (error) throw error;
    response.json({note: note})
    console.log('hit /notes post');
  });
}

module.exports = {
  findAll: findAll,
  showSingle: showSingle,
  writeNote: writeNote
}
