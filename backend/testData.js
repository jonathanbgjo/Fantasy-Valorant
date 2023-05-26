const User = require('./models/user')
const Player = require('./models/player')
const Team = require('./models/team')
const League = require('./models/league')

const newUser = new User({
  name: 'Jon Jo',
  email: 'johndoe@example.com',
  age: 25,
  teams: [],
  wins: 0,
});
const newPlayer = new Player({
  name: 'RONGCHO',
  role: 'Initiator',
  points: 0,
  projectedPoints: 0,
});
const newTeam = new Team({
  name: 'CLOUD9',
  user: newUser.ObjectId,
  players: [newPlayer._id],
  points: 0,
  projectedPoints: 0,
  wins: 0,
});
const newLeague = new League({
  name: 'TEST LEAGUE',
  age: 25,
  participants: [newUser],
  teams: [newTeam],
  start: 'Test Start Date',
  end: 'Test End Date',
  week: 0,
  type: 'Regular',
});
newUser.teams.push(newTeam._id)
module.exports = { newUser, newPlayer, newTeam, newLeague };
