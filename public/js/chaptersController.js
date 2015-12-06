'use strict';
angular.module('notesApp', [])
  .controller('ChaptersController', ChaptersController)

ChaptersController.$inject = ['$http'];

function ChaptersController($http){
  let self = this;
  self.all = [];

  getChapters();
  function getChapters(){
    $http
      .get('http://localhost:3000/chapters')
      .then(function(response){
        self.all = response.data.chapters;
      });
  };

}
