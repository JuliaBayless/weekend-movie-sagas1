const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
  // Add query to get all genres
  
  //join Tables movies_genre and genre to get the list of genres
  const query = `
    SELECT * FROM "genres"
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get genre', err);
      res.sendStatus(500)
    })

});


//grabs genres for selected movie on movie details page
router.get('/:movieId', (req, res) => {
  // Add query to get all genres
  //grab movie ID from req.params
  movieId = req.params.movieId
  console.log('This is the Movie ID for Genre', movieId);

  //join Tables movies_genre and genre to get the list of genres
  const query = `
    SELECT "name" FROM "genres"
    JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
    WHERE "movie_id" = $1;
  `;
  pool.query(query, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get genre', err);
      res.sendStatus(500)
    })

});

module.exports = router;