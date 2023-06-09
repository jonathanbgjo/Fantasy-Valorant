const express = require('express');
const router = express.Router();


router.get('/api/data', (req, res) => {
  // Handle the request and send a response
  // Example: Fetch data from a database and send it as JSON
  const data = [
    { id: 1, name: 'Data 1' },
    { id: 2, name: 'Data 2' },
  ];
  console.log(data);
  res.json(data);
});

module.exports = router;
