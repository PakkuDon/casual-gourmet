var router = require('express').Router();
var db = require('../knex_db');

// GET /api/ingredients
// Return ingredients matching substring
router.get('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
