var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { User } = require('../models');

// GET /api/users/:id
// Return details for selected user
router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: ['id', 'username', 'first_name', 'last_name', 'email']
  })
  .then(user => {
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    else {
      res.status(200).json({
        success: true,
        user
      });
    }
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Could not retrieve user details'
    });
  });
});

// POST /api/users/
// Create new user
router.post('/', (req, res) => {
  // Check if user exists
  if (req.body.email && req.body.username && req.body.password) {
    // If user exists, send error
    User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        res.status(400).json({
          success: false,
          message: 'Email used by other user'
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

        User.create(user)
          .then(user => {
            var token = jwt.sign({ user_id: user.id }, req.app.get('secret'), {
              expiresIn: '24h'
            });

            res.status(200).json({
              success: true,
              token: token
            });
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              success: false,
              message: 'Authentication failed'
            });
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Authentication failed'
      });
    });
  }
  else {
    res.status(400).json({
      success: false,
      message: 'Invalid user'
    });
  }
});

// PUT /api/users/:id
// Update selected user
router.put('/:id', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
