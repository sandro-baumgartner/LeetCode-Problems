# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

<b>Example 1:</b> <br>

<b>Input:</b> nums = [1,2,3,1] <br>
<b>Output:</b> 4 <br>
<b>Explanation:</b> Rob house 1 (money = 1) and then rob house 3 (money = 3). <br>
Total amount you can rob = 1 + 3 = 4. <br>
<br>
<b>Example 2:</b> <br>

<b>Input:</b> nums = [2,7,9,3,1] <br>
<b>Output:</b> 12 <br>
<b>Explanation:</b> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). <br>
Total amount you can rob = 2 + 9 + 1 = 12. <br>
 
<b>Constraints:</b>

- `1 <= nums.length <= 100` <br>
- `0 <= nums[i] <= 400`