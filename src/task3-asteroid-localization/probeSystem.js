const { calculateDistance } = require("./distance");

function createProbeSystem(hiddenAsteroid) {
  let probesSpent = 0;
  const probeCoordinates = [];

  function measureDistance(zondLocation) {
    probesSpent++;

    const distance = calculateDistance(zondLocation, hiddenAsteroid);

    probeCoordinates.push(zondLocation);

    return distance;
  }

  function getStats() {
    return {
      count: probesSpent,
      coordinates: probeCoordinates,
    };
  }

  return {
    measureDistance,
    getStats,
  };
}

module.exports = { createProbeSystem };
