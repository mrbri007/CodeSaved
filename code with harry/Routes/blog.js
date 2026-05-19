const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('User list');
});

router.get('/about', (req, res) => {
  res.send(`User with ID: ${req.params.id}`);
});

router.get('/blogpost/:slug', (req, res) => {
  res.send(`User with ID: ${req.params.slug}`);
});

module.exports = router