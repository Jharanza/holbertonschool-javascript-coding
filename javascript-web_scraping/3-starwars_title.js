#!/usr/bin/node

const request = require('request');

const movie = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/:id';

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.log(`Code: ${response.statusCode}`);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
