#!/usr/bin/node
/**
 * Print the characters from a Star War movie
 */
const request = require('request');

const moviId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${moviId}`;

request(url, (err, res, body) => {
  if (err) console.log(err);

  else if (res.statusCode !== 200) console.log(res.statusCode);

  else {
    const charactersUrl = JSON.parse(body).characters;
    charactersUrl.forEach(characterUrl => {
      request(characterUrl, (err, res, body) => {
        if (err) console.log(err);

        else if (res.statusCode !== 200) console.log(res.statusCode);

        else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
