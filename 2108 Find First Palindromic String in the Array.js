// use two pointers & find()
var firstPalindrome = function (words) {
  let result = words.find((element) => {
    let left = 0;
    let right = element.length - 1;
    while (left < right) {
      if (element[left] !== element[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  });
  if (result === undefined) {
    return "";
  } else {
    return result;
  }
};

words = ["abc", "car", "ada", "racecar", "cool"];

words2 = ["notapalindrome", "racecar"];
words3 = ["def", "ghi"];
console.log(firstPalindrome(words));
console.log(firstPalindrome(words2));
console.log(firstPalindrome(words3));
