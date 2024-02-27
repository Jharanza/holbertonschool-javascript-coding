#!/usr/bin/node
/**
 * Prints in stdout an string argument
 * @str argument that will be displayed
 */

module.exports = function displayMessage(str) {
  process.stdout.write(str);
};
