const mongoose = require('mongoose');

// Define the schema
const teamSchema = new mongoose.Schema({
  name: String,
  user: ObjectId,
  players: Array,
  points: Number,
  projectedPoints: Number,
});

// Create the model
const Team = mongoose.model('Team', teamSchema);

// Export the model
module.exports = Team;