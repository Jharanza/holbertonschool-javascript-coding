#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/';

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    for (const key in movie) {
      if (movie.hasOwnProperty(key)) {
	const value = movie[key];
        for (const key1 in value) {
          if (value.hasOwnProperty(key1)) {
            const val = value[key1];
            if (val['episode_id'] == movieId) {
              console.log(val['title']);
	    }
	  }
	}
      }
    }
  }
});
