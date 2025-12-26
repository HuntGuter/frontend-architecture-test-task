const { run } = require("./engine");

function filterData(data, condition) {
  return {
    result: run(data, condition),
  };
}

module.exports = { filterData };
