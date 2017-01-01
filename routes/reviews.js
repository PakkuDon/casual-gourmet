var router = require('express').Router();
var auth = require('../middleware/auth');
var { Review } = require('../models');

// POST /api/reviews
// Add review for recipe
router.post('/', auth.isAuthenticated, (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: 'Review data required'
    });
  }

  // Save review to database
  Review.create({
    content: req.body.content,
    score: parseInt(req.body.score),
    user_id: req.token.user_id,
    recipe_id: req.body.recipe_id
  })
  .then(review => {
    res.status(200).json({
      success: true,
      message: 'Review added successfully',
      review
    });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  });
});

module.exports = router;
