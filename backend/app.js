const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // Load environment variables from .env file
const mongoose = require('mongoose');
console.log(process.env.DB_CONNECTION_STRING)
// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });