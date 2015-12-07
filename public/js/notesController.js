'use strict';
angularApp
  .controller('NotesController', NotesController);

//allow http to send calls to notes controller.
NotesController.$inject = ['$http'];
// NotesController.$inject = ['Flash'];

function NotesController($http){
  let self = this;
  self.all = [];
  // CRUD for notes
  self.addNote = addNote;
  // blank object that will hold form information
  self.newNote = {};
  self.editedNote = {};
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
  function viewNote(note){
    $http
      // route hard-corded for now
      .get('http://localhost:3000/notes/' + note._id)
      .then(function(response){
        self.single = response.data.note[0];

        // return self.single = response.data.note;
      });
  };

  function addNote(){
    $http
      // self.newNote is tied to the ng-model label on the new note form
      .post('http://localhost:3000/notes', self.newNote)
      .then(function(response) {
        // run getNotes() again to update the notes list dynamically.
        getNotes();
      });
      // self.newNote = {};
  }

  function editNote(note){
    $http
    // self.single is tied to the ng-model on the edit note form
    .put('http://localhost:3000/notes/' + self.single._id, self.single)
    .then(function(response) {
      // getNotes();
      // console.log('response: ' + response);
      // self.editedNote = response
    })
  }

  function deleteNote(note) {
    $http
    .delete('http://localhost:3000/notes/' + self.single._id)
    .then(function(response) {
      getNotes();
      // console.log('response from post: ' + response);
    });
  }



  // show the alert for a saved note
  function showAlert(){
    // let showsuccess = undefined;
    // var showsuccess = "showsuccess";
    return "showsuccess";
  }

  setTimeout(showAlert, 3000);




  // function collapseMenu() {
  //   this.isCollapsed = true;
  // }

  // function flash(Flash){
  //   successAlert = function() {
  //     var message = 'Note saved!'
  //     Flash.create('success', message, 'custom-class')
  //   }
  // }


} //ends NotesController function
