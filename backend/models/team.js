const mongoose = require('mongoose');

// Define the schema
const teamSchema = new mongoose.Schema({
  name: String,
  user: {type: mongoose.Schema.Types.ObjectId,
    ref: 'User',},
  players: Array,
  points: Number,
  projectedPoints: Number,
  wins: Number,
});

// Create the model
const Team = mongoose.model('Team', teamSchema);

// Export the model
module.exports = Team;