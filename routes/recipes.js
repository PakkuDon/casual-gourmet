var router = require('express').Router();
var db = require('../db');

// GET /api/recipes
// Return recipes filtered by tags, ingredients, name
// and within offset and limit
router.get('/', (req, res) => {
  db('recipes').select()
  .then(recipes => {
    res.json({
      success: true,
      recipes: recipes
    });
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  })
});

// GET /api/recipes/:id
// Retrieve single recipe
router.get('/:id', (req, res) => {
  db('recipes')
  .where({ id: req.params.id })
  .then(results => {
    if (results.length === 0) {
      res.sendStatus(404);
    }
    else {
      res.json({
        success: true,
        recipe: results[0]
      });
    }
  })
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
