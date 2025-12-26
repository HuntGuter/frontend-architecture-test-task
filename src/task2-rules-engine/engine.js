const rules = [
  require("./rules/exclude.rule"),
  require("./rules/include.rule"),
  require("./rules/sortBy.rule"),
];

function run(data, condition = {}) {
  return rules.reduce((acc, rule) => {
    const params = condition[rule.name];
    if (!params) return acc;
    return rule.apply(acc, params);
  }, data);
}

module.exports = { run };
