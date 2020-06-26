const mongoose = require('mongoose');

let userSchema = mongoose.Schema();
userSchema = new Schema({
  first_name: String,
  Second_name: String,
  Address: String,
  Email: String,
  Password: String
});

const user = mongoose.model(userSchema, 'Users');
module.exports = user;
