let mySqrt = function (x) {
  let root;
  for (let i = 1; i <= x / 2; i++) {
    if (i * i <= x) {
      root = i;
    }
  }
  return root;
};

mySqrt(99);

