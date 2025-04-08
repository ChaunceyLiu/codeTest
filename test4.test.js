const { minScheme } = require("./test4.js");

describe("单元测试", () => {
  test("实例1", () => {
    const packages = [2,3,5], boxes = [[4,8],[2,8]]
    expect(minScheme(packages, boxes)).toEqual(6);
  });

  test("实例2", () => {
    const packages = [2,3,5], boxes = [[1,4],[2,3],[3,4]]
    expect(minScheme(packages, boxes)).toEqual(-1);
  });

  test("实例3", () => {
    const packages = [3,5,8,10,11,12], boxes = [[12],[11,9],[10,5,14]]
    expect(minScheme(packages, boxes)).toEqual(9);
  });
});
