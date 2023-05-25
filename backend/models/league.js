const mongoose = require('mongoose');

// Define the schema
const leagueSchema = new mongoose.Schema({
  name: String,
  participants: Array,
  teams: Array,
  start: Date,
  end: Date,
  week: Number,
  type: String,
});

// Create the model
const League = mongoose.model('League', leagueSchema);

// Export the model
module.exports = League;