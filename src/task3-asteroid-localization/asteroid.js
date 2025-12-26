const { CUBE_SIZE } = require("./constants");

function generateAsteroidLocation(max = CUBE_SIZE) {
  return {
    x: Math.floor(Math.random() * (max + 1)),
    y: Math.floor(Math.random() * (max + 1)),
    z: Math.floor(Math.random() * (max + 1)),
  };
}

module.exports = { generateAsteroidLocation };
