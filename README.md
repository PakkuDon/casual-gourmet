# Casual Gourmet

Recipe sharing app. Final project for Web Development Immersive.
Screenshot pending.

[Live demo](http://casual-gourmet.herokuapp.com/#/)

## Approach taken
- Read about tech such as JSON Web Tokens and Redux, the latter which went unused
- Wrote user stories
- Database design
- Changed app idea about four times
- Search for design inspiration on Dribbble and Behance
- Wrote database migrations
- Wrote route map - expected URLs in application and intended purpose for each
- Wrote code for most of the API endpoints used by the intended MVP
- Wrote out UI code along with more database migrations to cover missing fields
- Styling

## Technologies used
- Node.js
- Express.js
- PostgreSQL
- Knex.js
- JSON Web Tokens
- Webpack
- React
- HTML
- CSS + Sass
- JavaScript (ES2015, transpiled using Babel)

## Installation instructions
```
npm install
cp config/db_config.js.template config/db_config.js
Add database credentials to config/db_config.js
./node_modules/.bin/knex migrate:latest
./node_modules/.bin/knex seed:run
npm run build && npm start
OR
npm run build
npm run dev
```

## Future updates
- Server-side rendering
- Redux-ification (If necessary)
- More input validation
- Advanced recipe search
- Bookmark system
- Follower system
- File uploads for recipes

## Major hurdles
- Ideation. It was difficult to find a balance between something I was interested in, something that could best show off my skills and something that would be achievable in a week.
- Trying to juggle a few unfamiliar technologies in a week.
- React state management. Initially wanted to use Redux but in the end I felt I didn't have the time to learn it nor did I have an app complex enough to justify its use.
