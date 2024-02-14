#!/usr/bin/node
/**
 * Count the number of films where a character appear
 * @request module request
 * @uri argument that is the url of the API
 * @moives data from the body response
 * @artillesInMovie count number of films where appear a character
 */
const request = require('request')

const uri = process.argv[2];

request(uri, (err, res, body) => {
  if (err) console.log(err);
  else if (res.statusCode !== 200) console.log(res.statusCode);
  else {
    const movies = JSON.parse(body).results;
    const antillesInMovie = movies.reduce((count, movie) => {
      if (movie.characters.some(character => character.includes('/18/'))) {
        count += 1;
      }
      return count;
  }, 0);
  console.log(antillesInMovie)
  }
})