function formatPaths(paths) {
  return paths.map(path =>
    path.map(step => {
      const formatted = {};
      Object.entries(step).forEach(([k, v]) => {
        formatted[String(k)] = String(v);
      });
      return formatted;
    })
  );
}

module.exports = { formatPaths };
