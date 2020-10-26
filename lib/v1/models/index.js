// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
/*
module.exports = mongoose.model(
  'User', 
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    password: { type: String, required: true },
    userType: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    dateCreated: { type: Date, default: new Date() },
    lastLogin: { type: Date, default: new Date() },
    emailVerified: { type: Boolean, default: false }
  }).plugin(uniqueValidator)
);
*/
