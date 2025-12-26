function compareStrings(a, b) {
  return String(a).localeCompare(String(b), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

module.exports = {
  name: "sortBy",
  apply(data, keys = []) {
    if (!keys.length) return data;

    const sorted = [...data];

    sorted.sort((a, b) => {
      for (const key of keys) {
        const result = compareStrings(a[key], b[key]);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    });

    return sorted;
  },
};
