function minScheme(packages, boxes) {
  let n = packages.length;
  packages.sort((a, b) => a - b);
  let result = Infinity;

  for (let box of boxes) {
    box.sort((a, b) => a - b);
    let dp = new Array(n + 1).fill(0);
    let canFit = true;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < box.length; j++) {
        if (
          (box[j] >= packages[i] && dp[i + 1] === 0) ||
          dp[i] < dp[i - 1] + box[j] - packages[i]
        ) {
          dp[i + 1] = dp[i] + box[j] - packages[i];
          break;
        }
      }
      if (i > 0 && dp[i + 1] === 0) {
        canFit = false;
        break;
      }
    }

    if (canFit) {
      result = Math.min(result, dp[n]);
    }
  }

  return result !== Infinity ? result : -1;
}

module.exports = { minScheme };
