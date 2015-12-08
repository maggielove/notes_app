//first argument corresponds to what we're putting in html header tag by ng-app
// Assign angular app to a variable so that I can use it with multiple controllers
// & avoid conflicts
var angularApp = angular.module('notesApp', ['ui.router'] )
angularApp.$inject = ['ui.bootstrap'];
// angularApp.$inject = ['ui.router'];
angularApp.config(NoteRouter);

function NoteRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index");

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl:'list.html'
  })
  .state('new', {
    url: '/notes',
    templateUrl: 'new.html'
  })

}
// angularApp.$inject = ['ngQuill']
// angularApp.config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
//                 ngQuillConfigProvider.set([{
//                     alias: '10',
//                     size: '10px'
//                 }, {
//                     alias: '12',
//                     size: '12px'
//                 }, {
//                     alias: '14',
//                     size: '14px'
//                 }, {
//                     alias: '16',
//                     size: '16px'
//                 }, {
//                     alias: '18',
//                     size: '18px'
//                 }, {
//                     alias: '20',
//                     size: '20px'
//                 }, {
//                     alias: '22',
//                     size: '22px'
//                 }, {
//                     alias: '24',
//                     size: '24px'
//                 }], [{
//                     label: 'Arial',
//                     alias: 'Arial'
//                 }, {
//                     label: 'Sans Serif',
//                     alias: 'sans-serif'
//                 }, {
//                     label: 'Serif',
//                     alias: 'serif'
//                 }, {
//                     label: 'Monospace',
//                     alias: 'monospace'
//                 }, {
//                     label: 'Trebuchet MS',
//                     alias: '"Trebuchet MS"'
//                 }, {
//                     label: 'Verdana',
//                     alias: 'Verdana'
//                 }])
//             }]);
// angularApp.controller('AppCtrl', [
//                 '$scope',
//                 'ngQuillConfig',
//                 function($scope, ngQuillConfig) {
//                     $scope.showToolbar = true;
//                     $scope.translations = angular.extend({}, ngQuillConfig.translations, {
//                         10: 'smallest'
//                     });
//                     $scope.toggle = function() {
//                         $scope.showToolbar = !$scope.showToolbar;
//                     };
//                 }
//             ]);
// angularApp.$inject = ['flash'];
// angularApp.$inject = ['watch'];
