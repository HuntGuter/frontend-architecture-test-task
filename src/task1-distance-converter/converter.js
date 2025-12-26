const fs = require("fs");
const path = require("path");

const unitsPath = path.resolve(__dirname, "units.config.json");

function loadUnits() {
  const raw = fs.readFileSync(unitsPath, "utf-8");
  return JSON.parse(raw);
}

const units = loadUnits();

function convertDistance(input) {
  const { distance, convert_to } = input;
  const { unit, value } = distance;

  const valueInMeters = value * units[unit];
  const result = valueInMeters / units[convert_to];

  return {
    unit: convert_to,
    value: Number(result.toFixed(2)),
  };
}

module.exports = {
  convertDistance,
};
