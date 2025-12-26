const { CUBE_SIZE } = require("./constants");

function findCoordinate(axis, fixed, measureDistance) {
  let low = 0;
  let high = CUBE_SIZE;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    const pointMid = { ...fixed, [axis]: mid };
    const dMid = measureDistance(pointMid);

    if (dMid === 0) return mid;

    const pointNext = { ...fixed, [axis]: mid + 1 };
    const dNext = measureDistance(pointNext);

    if (dNext < dMid) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

module.exports = { findCoordinate };
