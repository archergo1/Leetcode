var gcdOfStrings = function (str1, str2) {
  let prefix = "";
  array1 = str1.split();
  array2 = str2.split();
  for (let i = 0; i <= array1.length; i++) {
    for (let j = 0; j <= array2.length; j++) {
      if ((array1[i] = array2[j])) {
        prefix += array1[i];
      } else {
        break;
      }
    }
  }
};
