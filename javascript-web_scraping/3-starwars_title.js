#!/usr/bin/node
/**
 * Print the title of a film from an API with a given id
 * @request module request
 * @id argumento given
 * @movie data from the body of the request
 */
const request = require('request');

const id = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${id}`, (err, resp, body) => {
  if (err) console.error(err);
  else if (resp.statusCode !== 200) console.log('Status code ', resp.statusCode);
  else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
