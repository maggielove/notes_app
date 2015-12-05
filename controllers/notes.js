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
  console.log('hit /notes post');
  console.log('note json/ request.body.note: ' + request.body);
  let note = new Note(request.body);

  note.save(function(error) {
    if (error) response.json({message: 'Unable to start new note due to this error: ' + error });
    response.json({note: note});
  });
}

function updateNote(request, response){
  let id = request.params.id;

  Note.findById({_id: id}, function(error, note){
    if(error) response.json({ message: 'Error finding note: ' + error });

    if(request.body.title) note.title = request.body.title;
    if(request.body.body) note.body = request.body.body;
    console.log('edited title: ' + request.body.title);
    console.log('edited body: ' + request.body.body);

    note.save(function(error) {
      if (error) response.json({ message: 'Error editing note: ' + error });
      response.json({message: 'Note updated', note: note});
    });
  });
}

function discardNote(request, response) {
  let id = request.params.id;
  Note.remove({ _id: id}, function(error){
    if (error) response.json({message: 'Unable to delete note--see error: ' + error});

    response.json({ message: 'Note successfully deleted'});
  });
}

module.exports = {
  findAll: findAll,
  showSingle: showSingle,
  writeNote: writeNote,
  discardNote: discardNote,
  updateNote: updateNote
}
