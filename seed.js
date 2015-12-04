'use strict';
let mongoose = require('mongoose');
let User = require('./models/user');
let Note = require('./models/note');

mongoose.connect('mongodb://localhost/notesApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', (callback) => {
  console.log('Mongoose Connected');
});

let emails = [ 'maggie@email.com' ]

let passwords = [ 'password' ]

let notes = [
  // notes for maggie
  [
    {
      title: 'Sample Note',
      body: 'Maecenas sit amet tellus – nec mi gravida posuere non pretium magna. Fusce ac sodales magna. Aliquam tincidunt velit sit (amet ante hendrerit tempus). Suspendisse potenti H20. Potenti et eros sed justo – commodo bibendum non at nunc. Nulla lobortis tempus commodo? Vestibulum sit amet ipsum lacus… Potenti et eros sed justo commodo bibendum non at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Donec et nisi dictum felis, sollicitudin, congue Heydon™. Nulla auctor eleifend turpis consequat pharetra. Suspendisse potenti. Fusce ac sodales magna.'
    },
    {
      title: 'Another Note',
      body: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.'
    }
  ]
]

let maggie = new User({
  email: emails[0],
  password: passwords[0]
})

maggie.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    let maggieNote1 = new Note({
      title: notes[0][0]['title'],
      body: notes[0][0]['body']
    });
    console.log('maggieNote1: ' + maggieNote1);
    console.log('maggieNote1._id ' + maggieNote1._id);
    maggieNote1.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        maggie.notes.push(maggieNote1._id);
        let maggieNote2 = new Note({
          title: notes[0][1]['title'],
          body: notes[0][1]['body']
        });
        maggieNote2.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            maggie.notes.push(maggieNote2._id);
            //save maggie to update the note (id) list
            maggie.save();
          }
        })
      } //ends else
    }) //ends maggieNote1.save
  } //ends first else
}) //ends maggie.save
