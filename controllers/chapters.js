'use strict';
var Chapter = require('../models/chapter');
let request = require('request');

//Get
function findAll(request, response) {
  Chapter.find(function(error, chapters) {
    if (error) response.json({ message: 'No chapters found.' });

    response.json({ chapters: chapters });
    // console.log( 'chapters[0].title: ' + chapters[0].title );
  });
} //ends findAll

// add a new note to a Chapter
function changeNotesList(request, response){
  let id = request.params.id;

  Chapter.findById({ _id: id }, function(error, chapter){
    if (error) response.json({message: 'Error finding chapter: ' + error});

    if (request.body.title) chapter.title = request.body.title;
    // Will need to find a way to push notes id into request.body.notes before this
    // or during this step.
    if (request.body.noteId) chapter.notes.push(request.body.noteId);

    chapter.save(function(error){
      if (error) response.json({message: 'Error updating chapter: ' + error});
      response.json({message: 'Chapter updated',  chapter: chapter})
    })
    // how to get note id in chapterController addNote?
    // chapter.notes.push(note._id);
  })
}

module.exports = {
  findAll: findAll,
  changeNotesList: changeNotesList
}
