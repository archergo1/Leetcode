var findGCD = function (nums) {
  let maxValue = nums[0];
  let minValue = nums[0];
  nums.forEach((element) => {
    if (element > maxValue) {
      maxValue = element;
    }

    if (element < minValue) {
      minValue = element;
    }
  });

  console.log(maxValue);
  console.log(minValue);

  function gcd(p, q) {
    if (q == 0) return p;
    r = p % q;
    return gcd(q, r);
  }
  return gcd(maxValue, minValue);
};

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
