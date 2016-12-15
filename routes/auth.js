var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var db = require('../db');

// POST /api/auth
// Authenticate user
router.post('/', (req, res) => {
  db('users').where({
    email: req.body.email
  })
  .then(results => {
    if (results.length === 0) {
      res.sendStatus(404);
    }
    else {
      var user = results[0];
      if (bcrypt.compareSync(req.body.password, user.password)) {
        var token = jwt.sign({ user_id: user.id }, req.app.get('secret'), {
          expiresIn: '24h'
        });

        res.json({
          success: true,
          token: token
        });
      }
      else {
        res.sendStatus(401);
      }
    }
  })
});

// DELETE /api/auth
// End user session
router.delete('/', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
