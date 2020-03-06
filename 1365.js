/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const results = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let counter = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] < nums[i]) {
        counter++;
      }
    }
    results.push(counter);
  }
  return results;
};
