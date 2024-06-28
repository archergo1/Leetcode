var heightChecker = function (heights) {
  // make a shallow copy of the heights
  const newArr = [...heights];
  newArr.sort();

  let unmatched = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== heights[i]) {
      unmatched++;
    }
  }

  return unmatched;
};

const case1 = [1, 1, 4, 2, 1, 3];
const case2 = [5, 1, 2, 3, 4];
const case3 = [1, 2, 3, 4, 5];

// case4 can't be sorted in ascending order correctly!
const case4 = [
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
];

console.log(heightChecker(case1));
console.log(heightChecker(case2));
console.log(heightChecker(case3));
console.log(heightChecker(case4));
