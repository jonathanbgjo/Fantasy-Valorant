
require('dotenv').config();
const express = require('express');
const dataRoutes = require('./routes/routes');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const { newUser, newPlayer, newTeam, newLeague } = require('./testData');

console.log(newUser);
console.log(newPlayer);
console.log(newTeam);
console.log(newLeague);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbConnectionString = process.env.DB_CONNECTION_STRING
console.log(dbConnectionString)
const client = new MongoClient(dbConnectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
});
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // newUser.save()
    //   .then((savedUser) => {
    //     console.log('User saved successfully:', savedUser);
    //   })
    //   .catch((error) => {
    //     console.error('Error saving user:', error);
    //   });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// Register the dataRoutes
app.use(dataRoutes);

// ... Other middleware and server configuration

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
