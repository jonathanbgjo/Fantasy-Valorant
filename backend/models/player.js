const mongoose = require('mongoose');

// Define the schema
const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
  points: Number,
  projectedPoints: Number,
  team: ObjectId,
});

// Create the model
const Player = mongoose.model('Player', playerSchema);

// Export the model
module.exports = Player;