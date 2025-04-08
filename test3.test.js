const { minFreight } = require("./test3.js");

describe("单元测试", () => {
  test("实例1", () => {
    expect(minFreight([1,2,3,4,5,6,7,8,9,10], 5)).toEqual(15);
  });

  test("实例2", () => {
    expect(minFreight([3,2,2,4,1,4], 3)).toEqual(6);
  });

  test("实例3", () => {
    expect(minFreight([1,2,3,1,1], 4)).toEqual(3);
  });
});
