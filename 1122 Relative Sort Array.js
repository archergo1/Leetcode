const relativeSortArray = function (arr1, arr2) {
  // to put sth iterable into Map
  const lookup = new Map();
  console.log("lookup", lookup);
  const N = arr2.length;
  arr2.forEach((element, index) => {
    lookup.set(element, index);
  });

  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};

console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
