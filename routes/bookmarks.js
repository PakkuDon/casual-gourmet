var router = require('express').Router();
var { Bookmark } = require('../models');
var auth = require('../middleware/auth');

// POST /api/bookmarks
// Add recipe to user's bookmarks
router.post('/', auth.isAuthenticated, (req, res) => {
  if (!req.body.recipe_id) {
    res.status(400).json({
      success: false,
      message: 'Recipe ID not given'
    });
  }
  else {
    // Check if user already has bookmark for given recipe
    Bookmark.findOne({
      where: {
        user_id: req.token.user_id,
        recipe_id: req.body.recipe_id
      }
    })
    .then(bookmark => {
      // If already bookmarked, return error
      if (bookmark) {
        return res.status(400).json({
          success: false,
          message: 'Already bookmarked'
        });
      }
      // Otherwise, add bookmark
      Bookmark.create({
        user_id: req.token.user_id,
        recipe_id: req.body.recipe_id
      })
      .then(() => {
        res.status(200).json({
          success: true,
          message: 'Bookmark made successfully'
        });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          success: false,
          message: 'Internal server error'
        });
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    });
  }
});

module.exports = router;
