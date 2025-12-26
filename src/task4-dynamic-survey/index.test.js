let functions = require(".");

beforeEach(() => {
  // we need this to reset state of any additional vars and functions, that can be created in index.js
  jest.resetModules();
  jest.restoreAllMocks();
  functions = require("./index.js");
});

describe("Basic tests", () => {
  it("The output data meets the task conditions and is returned in the correct format", () => {
    const result = functions.testQuestioner();

    expect(result).toHaveProperty("paths");
    expect(result.paths).toHaveProperty("number");
    expect(result.paths).toHaveProperty("list");

    expect(result.paths.number).toEqual(expect.any(Number));
    expect(Array.isArray(result.paths.list)).toBe(true);

    result.paths.list.forEach((path) => {
      expect(Array.isArray(path)).toBe(true);
      path.forEach((step) => {
        expect(step).toBeInstanceOf(Object);
        // every key and value should be strings
        Object.entries(step).forEach(([k, v]) => {
          expect(typeof k).toBe("string");
          expect(typeof v).toBe("string");
        });
      });
    });
  });
});
