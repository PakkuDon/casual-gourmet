var router = require('express').Router();
var db = require('../db');

// POST /api/bookmarks
// Add recipe to user's bookmarks
router.post('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
