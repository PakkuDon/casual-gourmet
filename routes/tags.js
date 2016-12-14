var router = require('express').Router();
var db = require('../db');

// GET /api/tags
// Return filtered list of tags
router.get('/', (req, res) => {
  db('tags').where('name', 'like', `%${req.query.tag || ''}%`)
    .then(tags => {
      res.json({
        success: true,
        tags: tags
      });
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
