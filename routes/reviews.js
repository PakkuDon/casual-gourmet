var router = require('express').Router();
var db = require('../db');

// POST /api/reviews
// Add review for recipe
router.post('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
