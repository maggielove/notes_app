'use strict';
angular.module('notesApp', [])
  .controller('NotesController', NotesController);

//allow http to send calls to notes controller.
NotesController.$inject = ['$http'];

function NotesController($http){
  let self = this;
  self.all = [];
  // CRUD for notes
  self.addNote = addNote;
  // blank object that will hold form information
  self.newNote = {};
  self.viewNote = viewNote;
  self.single = {};
  self.getNotes = getNotes;
  self.editNote = editNote;
  self.deleteNote = deleteNote;

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
      .get('http://localhost:3000/notes/5662591b1ea05bab7821fefb')
      .then(function(response){
        console.log(response)
        self.single = response.data.note[0];

        // return self.single = response.data.note;
      });
  };

  function addNote(){
    $http
      .post('http://localhost:3000/notes', self.newNote)
      .then(function(response) {
        // getNotes();
        // console.log('response from post: ' + response);
      });
      // self.newNote = {};
  }

  function editNote(){
    $http
    .put('http://localhost:3000/notes/5662591b1ea05bab7821fefb')
  }

  function deleteNote(note) {
    $http
    .delete('http://localhost:3000/notes/5662591b1ea05bab7821fefb')
    // .delete('http://localhost:3000/notes/' + note._id)
  }


} //ends NotesController function
