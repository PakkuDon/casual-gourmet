var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { User } = require('../models');

// POST /api/auth
// Authenticate user
router.post('/', (req, res) => {
  User.findOne({
    where: { email: req.body.email }
  })
  .then(user => {
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Email or password invalid'
      });
    }
    else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        var token = jwt.sign({ user_id: user.id }, req.app.get('secret'), {
          expiresIn: '24h'
        });

        res.status(200).json({
          success: true,
          message: 'Login successful',
          token: token
        });
      }
      else {
        res.status(401).json({
          success: false,
          message: 'Email or password invalid'
        });
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
