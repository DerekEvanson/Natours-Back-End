const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    minlength: [2, 'A name must have more or equal then 2 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A user must have a password'],
    maxlength: [60, 'A name must have less or equal then 10 characters'],
    minlength: [2, 'A name must have more or equal then 2 characters'],
    validate: {
      // This only works on User.create and User.save
      validator: function (e) {
        return e === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm
  this.passwordConfirm = undefined;
  next();
});

const User = new mongoose.model('User', userSchema);
module.exports = User;
