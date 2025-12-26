const dialogTree = require("./dialogTree.json");
const { collectPaths } = require("./traversal");
const { formatPaths } = require("./formatter");

function testQuestioner() {
  const rawPaths = collectPaths(dialogTree, "start");
  const formattedPaths = formatPaths(rawPaths);

  return {
    paths: {
      number: formattedPaths.length,
      list: formattedPaths,
    },
  };
}

module.exports = { testQuestioner };
