const { getLengthOfOptimalCompression } = require("./test5.js");

describe("单元测试", () => {
  test("实例1", () => {
    expect(getLengthOfOptimalCompression("aaabcccd", 2)).toEqual(4);
  });

  test("实例2", () => {
    expect(getLengthOfOptimalCompression("aabbaa", 2)).toEqual(2);
  });

  test("实例3", () => {
    expect(getLengthOfOptimalCompression("aaaaaaaaaaa", 0)).toEqual(3);
  });
});
