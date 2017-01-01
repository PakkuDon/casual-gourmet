var router = require('express').Router();
var { Tag } = require('../models');

// GET /api/tags
// Return filtered list of tags
router.get('/', (req, res) => {
  Tag.findAll({
    where: {
      name: { $iLike: `%${req.query.tag || ''}%` }
    },
    attributes: [ 'id', 'name' ]
  })
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
