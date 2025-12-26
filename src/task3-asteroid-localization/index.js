const { generateAsteroidLocation } = require("./asteroid");
const { createProbeSystem } = require("./probeSystem");
const { findCoordinate } = require("./searchAlgorithm");

function findAsteroidLocation() {
  const hiddenAsteroid = generateAsteroidLocation();
  const probeSystem = createProbeSystem(hiddenAsteroid);

  const x = findCoordinate("x", { y: 0, z: 0 }, probeSystem.measureDistance);
  const y = findCoordinate("y", { x, z: 0 }, probeSystem.measureDistance);
  const z = findCoordinate("z", { x, y }, probeSystem.measureDistance);

  return {
    result: {
      location: { x, y, z },
      probes: probeSystem.getStats(),
    },
  };
}

module.exports = { findAsteroidLocation };
