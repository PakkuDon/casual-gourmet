var router = require('express').Router();
var db = require('../db');

// GET /api/tags
// Return filtered list of tags
router.get('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
