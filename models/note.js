'use strict';
let mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title: String,
  created_at: String,
  body: String
});

let Note = mongoose.model('Note', noteSchema);
module.exports = Note;
