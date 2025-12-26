const { convertDistance } = require("./converter");

function convertDistanceUnits(input) {
  const adaptedInput = {
    distance: input.distance,
    convert_to: input.convertTo,
  };

  return convertDistance(adaptedInput);
}

module.exports = {
  convertDistanceUnits,
};