var router = require('express').Router();
var db = require('../knex_db');
var auth = require('../middleware/auth');

// GET /api/recipes
// Return recipes filtered by tags, ingredients, name
// and within offset and limit
router.get('/', (req, res) => {
  db('recipes')
    .select()
    .where('name', 'like', `%${req.query.name}%`)
    .then(recipes => {
      res.json({
        success: true,
        recipes: recipes
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve recipes'
      });
    })
});

// GET /api/recipes/:id
// Retrieve single recipe
router.get('/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .then(results => {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Recipe not found'
        });
      }
      else {
        res.json({
          success: true,
          recipe: results[0]
        });
      }
    });
});

// POST /api/recipes
// Create new recipe
router.post('/', auth.isAuthenticated, (req, res) => {
  if (req.body) {
    // TODO: Set author_id
    var recipe = {
      name: req.body.name,
      description: req.body.description,
      instructions: req.body.instructions,
      date_posted: new Date(),
      author_id: req.token.user_id,
      image_url: req.body.image_url
    };

    // Add recipe, then used ingredients
    db('recipes')
      .returning('id')
      .insert(recipe)
      .then(recipeId => {
        recipeId = recipeId[0];
        if (!Array.isArray(req.body.ingredients)) {
          req.body.ingredients = Array.from(req.body.ingredients || []);
        }
        var ingredients = req.body.ingredients.map(ingredient => {
          // TODO: Remove hard-coded values
          return {
            recipe_id: recipeId,
            ingredient_id: 1,
            quantity: 100,
            units: 'g'
          };
        });
        db('recipe_ingredients')
          .returning('id')
          .insert(ingredients)
          .then(ids => {
            res.json({
              success: true,
              recipe_id: recipeId
            });
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              success: false,
              message: 'Failed to create recipe'
            });
          });
      });
  }
  else {
    res.status(400).json({
      success: false,
      message: 'Recipe data not supplied'
    })
  }
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
