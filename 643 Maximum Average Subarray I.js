var findMaxAverage = function (nums, k) {
  //   不要把 = 和 === 搞錯啊！
  if (k === nums.length) {
    average =
      nums.reduce((prev, curr) => {
        return prev + curr;
      }) / k;
    return average;
  }

  let maxValue = 0;
  for (let i = 0; i < k; i++) {
    maxValue += nums[i];
  }

  let tempValue = maxValue;
  for (let j = k; j <= nums.length; j++) {
    tempValue = tempValue + nums[j] - nums[j - k];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }

  return maxValue / k;
};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
