var router = require('express').Router();
var db = require('../knex_db');

// GET /api/tags
// Return filtered list of tags
router.get('/', (req, res) => {
  db('tags').where('name', 'like', `%${req.query.tag || ''}%`)
    .then(tags => {
      res.status(200).json({
        success: true,
        tags: tags
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve tags'
      });
    });
});

module.exports = router;
