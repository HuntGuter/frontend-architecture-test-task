function collectPaths(tree, stepId) {
  const step = tree[stepId];

  if (!step.options || step.options.length === 0) {
    const record = {};
    record[String(step.question)] = String(step.answer ?? "");
    return [[record]];
  }

  const paths = [];

  for (const option of step.options) {
    const subPaths = collectPaths(tree, option.next);

    for (const subPath of subPaths) {
      const current = {};
      current[String(step.question)] = String(option.label);
      paths.push([current, ...subPath]);
    }
  }

  return paths;
}

module.exports = { collectPaths };
