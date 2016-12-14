var router = require('express').Router();
var db = require('../db');

// GET /api/users/:id
// Return details for selected user
router.get('/:id', (req, res) => {
  res.sendStatus(501);
});

// POST /api/users/
// Create new user
router.post('/', (req, res) => {
  res.sendStatus(501);
});

// PUT /api/users/:id
// Update selected user
router.put('/:id', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
