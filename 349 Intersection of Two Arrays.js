var intersection = function (nums1, nums2) {
  const both = nums1.filter((element) => {
    return nums2.includes(element);
  });
  console.log(both);

  const intersection = new Set(both);
  const intersectionArr = [...intersection];
  console.log(intersectionArr);
  return intersectionArr;
  //   find the intersection and remove repeated elements
  //   const set1 = new Set(nums1);
  //   const set2 = new Set(nums2);
  //   const unique1 = [...set1];
  //   const unique2 = [...set2];
  //   const mix = [...unique1, ...unique2];
  //   const intersection = new Set(mix);
  //   const intersectionArr = [...intersection];
  //   return intersectionArr;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

intersection(nums1, nums2);
