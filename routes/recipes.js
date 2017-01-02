var router = require('express').Router();
var { User, Recipe } = require('../models');
var auth = require('../middleware/auth');

// GET /api/recipes
// Return recipes filtered by tags, ingredients, name
// and within offset and limit
router.get('/', (req, res) => {
  Recipe.findAll({
    where: {
      name: { $iLike: `%${req.query.name || ''}%` }
    }
  })
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
  });
});

// GET /api/recipes/:id
// Retrieve single recipe
router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        as: 'author',
        attributes: [ 'id', 'username' ]
      }
    ]
  })
  .then(recipe => {
    if (!recipe) {
      res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }
    else {
      res.json({
        success: true,
        recipe
      });
    }
  });
});

// POST /api/recipes
// Create new recipe
router.post('/', auth.isAuthenticated, (req, res) => {
  if (req.body) {
    // Add recipe, then used ingredients
    Recipe.create({
      name: req.body.name,
      description: req.body.description,
      instructions: req.body.instructions,
      author_id: req.token.user_id,
      image_url: req.body.image_url
    })
    .then(recipe => {
      res.json({
        success: true,
        recipe_id: recipe.id
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Failed to create recipe'
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
