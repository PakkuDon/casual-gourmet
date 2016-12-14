var router = require('express').Router();
var db = require('../db');

// POST /api/auth
// Authenticate user
router.post('/', (req, res) => {
  res.sendStatus(501);
});

// DELETE /api/auth
// End user session
router.delete('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
