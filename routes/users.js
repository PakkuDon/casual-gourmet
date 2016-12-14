var router = require('express').Router();
var db = require('../db');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const secret = 'wdi9-bar-code';

// GET /api/users/:id
// Return details for selected user
router.get('/:id', (req, res) => {
  res.sendStatus(501);
});

// POST /api/users/
// Create new user
router.post('/', (req, res) => {
  // Check if user exists
  if (req.body.email) {
    // If user exists, send error
    db('users').where({ email: req.body.email })
    .then(results => {
      if (results.length > 0) {
        res.json({
          success: false,
          errors: [
            'Email already taken'
          ]
        });
      }
      else {
        // Create new account
        var salt = bcrypt.genSaltSync(10);
        var user = {
          email: req.body.email,
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          password: bcrypt.hashSync(req.body.password, salt)
        };
        db('users').insert(user)
        // On success, create json token and log user in
        .then(id => {
          var token = jwt.sign(user, secret, {
            expiresIn: '24h'
          });

          res.json({
            success: true,
            token: token
          });
        })
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
  }
  else {
    res.sendStatus(400);
  }
});

// PUT /api/users/:id
// Update selected user
router.put('/:id', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
