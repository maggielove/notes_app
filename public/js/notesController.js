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
  // self.viewNote = viewNote;
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






} //ends NotesController function
