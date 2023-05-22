const express = require('express');
const dataRoutes = require('./routes/routes');

const app = express();

// Register the dataRoutes
app.use(routes);

// ... Other middleware and server configuration

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
