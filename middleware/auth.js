var jwt = require('jsonwebtoken');

var isAuthenticated = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, req.app.get('secret'), (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Authentication failed'
        });
      }
      else {
        req.token = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).json({
      success: false,
      message: 'Authentication token required'
    });
  }
};

module.exports = {
  isAuthenticated: isAuthenticated
};
