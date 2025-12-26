module.exports = {
  name: "exclude",
  apply(data, rules = []) {
    if (!rules.length) return data;

    return data.filter(item =>
      rules.every(rule => {
        const [key, value] = Object.entries(rule)[0];
        return item[key] !== value;
      })
    );
  }
};
