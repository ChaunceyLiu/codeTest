// LeetCode 1531. String Compression II
// 这个有点难 是看了leetCode的题解才明白的
function getLengthOfOptimalCompression(s, k) {
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            // 删除当前字符
            if (j < k) {
                dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i - 1][j]);
            }

            let count = 0, del = 0;
            // 向前查找可合并的连续字符
            for (let p = i; p >= 1; p--) {
                if (s[p - 1] === s[i - 1]) {
                    count++;
                } else {
                    del++;
                }
                if (del > j) break; // 删除次数不足时停止

                const currentJ = j - del;
                if (currentJ < 0) continue;

                const len = calculateLength(count);
                dp[i][j] = Math.min(dp[i][j], dp[p - 1][currentJ] + len);
            }
        }
    }

    return Math.min(...dp[n].slice(0, k + 1));
}

function calculateLength(count) {
    if (count === 0) return 0;
    if (count === 1) return 1;
    return 1 + String(count).length;
}
module.exports = { getLengthOfOptimalCompression };
