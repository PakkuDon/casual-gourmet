var router = require('express').Router();
var db = require('../db');

// GET /api/recipes
// Return recipes filtered by tags, ingredients, name
// and within offset and limit
router.get('/', (req, res) => {
  res.sendStatus(501);
});

// GET /api/recipes/:id
// Retrieve single recipe
router.get('/', (req, res) => {
  res.sendStatus(501);
});

// POST /api/recipes
// Create new recipe
router.post('/', (req, res) => {
  res.sendStatus(501);
});

// PUT /api/recipes/:id
// Edit recipe
router.put('/:id', (req, res) => {
  res.sendStatus(501);
});

// DELETE /api/recipes/:id
// Delete recipe
router.delete('/:id', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
