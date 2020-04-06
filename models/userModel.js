const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'need a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    maxlength: [60, 'A name must have less or equal then 10 characters'],
    minlength: [10, 'A name must have more or equal then 10 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A user must have a password'],
    maxlength: [60, 'A name must have less or equal then 10 characters'],
    minlength: [10, 'A name must have more or equal then 10 characters'],
  },
});

const User = new mongoose.model('User', userSchema);
module.exports = User;
