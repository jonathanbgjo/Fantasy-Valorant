const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  teams: Array,
  wins: Number,
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;