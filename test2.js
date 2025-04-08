// 接雨水思路差不多
function canSaveBoxesNum(boxes, warehouse) {
  const n = warehouse.length;
  if (n === 0) return 0;

  // 生成每个位置的最大可用高度
  const leftMin = new Array(n);
  leftMin[0] = warehouse[0];
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], warehouse[i]);
  }

  const rightMin = new Array(n);
  rightMin[n - 1] = warehouse[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], warehouse[i]);
  }

  const maxH = warehouse.map((_, i) => Math.max(leftMin[i], rightMin[i]));

  maxH.sort((a, b) => b - a);
  boxes.sort((a, b) => b - a);

  // 贪心匹配
  let count = 0;
  let i = 0,
    j = 0;
  while (i < maxH.length && j < boxes.length) {
    if (boxes[j] <= maxH[i]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
}
module.exports = { canSaveBoxesNum };
