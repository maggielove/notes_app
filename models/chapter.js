'use strict';
let mongoose = require('mongoose');

let chapterSchema = new mongoose.Schema({
  title: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
});

let Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;
