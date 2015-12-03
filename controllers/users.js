'use strict';
let User = require('../models/user');
let request = require('request');
let jwt = require('jsonwebtoken');
let expressJwt = require('express-jwt');
let secret = process.env.NASECRET;
let mongoose = require('mongoose');

// Authenticate
function authenticate(req, res) {
  console.log('email (can\'t access user key\'s value)' + req.body.user.email);
  User.findOne({
    email: req.body.user.email
  }, function(err, user) {
    // console.log('user: ' + user)
    if (err) throw err;
    if (user == undefined) {
      res.send({success: false, message: 'Authentication failed. User not found.'});
    } else {
      user.authenticate(req.body.user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return res.send({message: 'Password is a match! Token granted.', token: jwt.sign(user, secret)})
        } else {
          return res.send({message: "Password not a match. Token denied."});
        }
      }); //ends .authenticate
    } //ends else
  }); //ends function(err, user)
} //ends authenticate

module.exports = {
  authenticate: authenticate
}
