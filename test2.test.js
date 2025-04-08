const { canSaveBoxesNum } = require("./test2.js");

describe("单元测试", () => {
  test("实例1", () => {
    const boxes = [1, 2, 2, 3, 4];
    const warehouse = [3, 4, 1, 2];
    expect(canSaveBoxesNum(boxes, warehouse)).toEqual(4);
  });

  test("实例2", () => {
    const boxes = [3, 5, 5, 2];
    const warehouse = [2, 1, 3, 4, 5];

    expect(canSaveBoxesNum(boxes, warehouse)).toEqual(3);
  });
});
