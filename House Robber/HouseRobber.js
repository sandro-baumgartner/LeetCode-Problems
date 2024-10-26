/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }

    if(nums.length == 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }

    let moneyPerHouseCumulated = new Array(nums.length).fill(0);

    moneyPerHouseCumulated[0] = nums[0];
    moneyPerHouseCumulated[1] = nums[1];
    moneyPerHouseCumulated[2] = nums[0] + nums[2];

    for(let i = 3; i < nums.length; i++) {
        if(moneyPerHouseCumulated[i - 2] > moneyPerHouseCumulated[i - 3]) {
            moneyPerHouseCumulated[i] = moneyPerHouseCumulated[i - 2] + nums[i];
        } else {
            moneyPerHouseCumulated[i] = moneyPerHouseCumulated[i - 3] + nums[i];
        }
    }

    return Math.max(...moneyPerHouseCumulated);
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([1000,7,9,1000,1]));
console.log(rob([1,1000,9,1000,1]));
console.log(rob([6,6,4,8,4,3,3,10]));