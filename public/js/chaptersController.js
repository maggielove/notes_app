'use strict';
angularApp
  .controller('ChaptersController', ChaptersController)

ChaptersController.$inject = ['$http'];

function ChaptersController($http){
  let self = this;
  self.all = [];

  getChapters();
  function getChapters(){
    // console.log('getting all chapters');
    $http
      .get('http://localhost:3000/chapters')
      .then(function(response){
        // console.log('self.all: ' + response.data.chapters);
        self.all = response.data.chapters;
      });
  };

  // add note as param?
  function updateChapter(chapter){
    // push a note's id into the chapter's array of note ids.
    // hard-coded for Chapter 1
    // let noteId =
    // .put('http://localhost:3000/chapters/5663d378dc2db03c2d8fa663')
    console.log('note adding');
  }

}
