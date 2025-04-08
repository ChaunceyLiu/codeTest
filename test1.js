// 有很多边界情况没做考虑进去 仅满足目前题目要求的case
function findDifferences(obj1, obj2) {
  function diff(o1, o2) {
    if (o1 === o2) return undefined;
    if (o1 === null || o2 === null) return [o1, o2];

    // 处理数组
    if (Array.isArray(o1) && Array.isArray(o2)) {
      const result = {};
      const minLen = Math.min(o1.length, o2.length);
      for (let i = 0; i < minLen; i++) {
        const res = diff(o1[i], o2[i]);
        if (res !== undefined) {
          result[i] = res;
        }
      }
      return Object.keys(result).length ? result : undefined;
    }

    // 处理对象
    if (
      typeof o1 === "object" &&
      typeof o2 === "object" &&
      !Array.isArray(o1) &&
      !Array.isArray(o2)
    ) {
      const result = {};
      const keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);
      for (const key of keys) {
        if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
          const res = diff(o1[key], o2[key]);
          if (res !== undefined) {
            result[key] = res;
          }
        }
      }
      return Object.keys(result).length ? result : undefined;
    }
    return [o1, o2];
  }

  return diff(obj1, obj2) || {};
}


module.exports = { findDifferences };
