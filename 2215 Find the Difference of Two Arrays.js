var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const union = new Set([...set1, ...set2]);

  console.log(union);

  const intersection = new Set([...set1].filter((e) => set2.has(e)));

  console.log(intersection);

  const diff1 = new Set(set1);
  const diff2 = new Set(set2);
  set2.forEach((e) => {
    if (diff1.has(e)) {
    }
    diff1.delete(e);
  });
  console.log(diff1);

  set1.forEach((e) => {
    if (diff2.has(e)) {
    }
    diff2.delete(e);
  });
  console.log(diff2);
  return [diff1, diff2];
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

findDifference(nums1, nums2);
