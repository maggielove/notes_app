'use strict';
var Note = require('../models/note');

//Get
function findAll(request, response) {
  Note.find(function(error, notes) {
    if (error) response.json({ message: 'No notes found.' })

    response.json({ notes: notes });
  });
} //ends findAll


module.exports = {
  findAll: findAll
}
