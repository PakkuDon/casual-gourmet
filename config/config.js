require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "casual-gourmet",
    "host": process.env.DB_HOST,
    "dialect": "postgresql"
  },
  "production": {
    "url": process.env.DATABASE_URL
  }
}
