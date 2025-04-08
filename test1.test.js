const { findDifferences } = require("./test1.js");

describe("单元测试", () => {
  test("实例1", () => {
    const obj1 = {};
    const obj2 = {
      a: 1,
      b: 2,
    };
    expect(findDifferences(obj1, obj2)).toEqual({});
  });

  test("实例2", () => {
    const obj1 = {
      a: 1,
      v: 3,
      x: [],
      z: {
        a: null,
      },
    };
    const obj2 = {
      a: 2,
      v: 4,
      x: [],
      z: {
        a: 2,
      },
    };

    expect(findDifferences(obj1, obj2)).toEqual({
      a: [1, 2],
      v: [3, 4],
      z: {
        a: [null, 2],
      },
    });
  });

  test("实例3", () => {
    const obj1 = {
      a: 5,
      v: 6,
      z: [1, 2, 4, [2, 5, 7]],
    };
    const obj2 = {
      a: 5,
      v: 7,
      z: [1, 2, 3, [1]],
    };

    expect(findDifferences(obj1, obj2)).toEqual({
      v: [6, 7],
      z: {
        2: [4, 3],
        3: {
          0: [2, 1],
        },
      },
    });
  });
  test("实例4", () => {
    const obj1 = {
      a: { b: 1 },
    };
    const obj2 = {
      a: [5],
    };

    expect(findDifferences(obj1, obj2)).toEqual({
      a: [{ b: 1 }, [5]],
    });
  });

  test("实例5", () => {
    const obj1 = {
      a: [1, 2, {}],
      b: false,
    };
    const obj2 = {
      b: false,
      a: [1, 2, {}],
    };

    expect(findDifferences(obj1, obj2)).toEqual({});
  });
});
