var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('./db');
var app = express();

// Routes
var authRoutes = require('./routes/auth');
var bookmarkRoutes = require('./routes/bookmarks');
var ingredientRoutes = require('./routes/ingredients');
var recipeRoutes = require('./routes/recipes');
var reviewRoutes = require('./routes/reviews');
var tagRoutes = require('./routes/tags');
var userRoutes = require('./routes/users');

// Configure app
app.set('port', process.env.PORT || 8080);

// Add middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

// Add routes
var router = express.Router();
router.use('/auth', authRoutes);
router.use('/bookmarks', bookmarkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes);
router.use('/reviews', reviewRoutes);
router.use('/tags', tagRoutes);
router.use('/users', userRoutes);
app.use('/api', router);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
