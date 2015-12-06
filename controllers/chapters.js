'use strict';
var Chapter = require('../models/chapter');
let request = require('request');

//Get
function findAll(request, response) {
  Chapter.find(function(error, notes) {
    if (error) response.json({ message: 'No chapters found.' });

    response.json({ chapters: chapters });
  });
} //ends findAll

module.exports = {
  findAll: findAll
}
