You are given an integer array `nums`. You want to maximize the number of points you get by performing the following operation any number of times:

- Pick any `nums[i]` and delete it to earn `nums[i]` points. Afterwards, you must delete every element equal to `nums[i] - 1` and every element equal to `nums[i] + 1`.

Return the maximum number of points you can earn by applying the above operation some number of times.

<b>Example 1:</b> <br>

<b>Input:</b> nums = [3,4,2] <br>
<b>Output:</b> 6 <br>
<b>Explanation:</b> You can perform the following operations: <br>
\- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2]. <br>
\- Delete 2 to earn 2 points. nums = []. <br>
You earn a total of 6 points. <br>

<b>Example 2:</b> <br>

<b>Input:</b> nums = [2,2,3,3,3,4] <br>
<b>Output:</b> 9 <br>
<b>Explanation:</b> You can perform the following operations: <br>
\- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3]. <br>
\- Delete a 3 again to earn 3 points. nums = [3]. <br>
\- Delete a 3 once more to earn 3 points. nums = []. <br>
You earn a total of 9 points.
 
<b>Constraints:</b>

- `1 <= nums.length <= 2 * 10^4` <br>
- `1 <= nums[i] <= 10^4`