'use strict';
angular.module('notesApp', [])
  .controller('NotesController', NotesController);

//allow http to send calls to notes controller.
NotesController.$inject = ['$http'];

function NotesController($http){
  let self = this;
  self.all = [];
  // CRUD for notes
  // self.addNote = addNote;
  // self.newNote = {};
  self.viewNote = viewNote;
  self.single = {};
  // self.getNotes = getNotes;
  // self.deleteNote = deleteNote;

  //call getNotes here so that on page load, this information will be available.
  // (Other functions are called only when user selects them.)
  getNotes();
  function getNotes(){
    $http
      .get('http://localhost:3000/notes')
      .then(function(response){
        self.all = response.data.notes;
      });
  };

  // view a single note
  function viewNote(){
    $http
      // route hard-corded for now
      .get('http://localhost:3000/notes/5660b8644d26a79cb5566ff6')
      .then(function(response){
        console.log(response.data.note)
        self.single = response.data.note;

        // return self.single = response.data.note;
      });
  };






} //ends NotesController function
