function minFreight(weights, days) {
    let total = 0, maxWeight = 0;
    for (const w of weights) {
        total += w;
        maxWeight = Math.max(maxWeight, w);
    }

    let left = maxWeight, right = total;

    // 二分查找
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canShip(weights, days, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// 当前运载能力是否满足
function canShip(weights, days, capacity) {
    let currentLoad = 0;
    let requiredDays = 1;

    for (const w of weights) {
        if (currentLoad + w > capacity) {
            requiredDays++; // 需要增加天数
            currentLoad = 0; // 重置
        }
        currentLoad += w;
    }

    return requiredDays <= days;
}

module.exports = { minFreight };