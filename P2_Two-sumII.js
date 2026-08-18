/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let sum = nums[left] + nums[right];
        
        if(sum === target) return [left + 1 , right + 1];

        if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [-1, -1];
    
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { nums: [2,7,11,15], target: 9, expected: [1, 2] },
    ];

    testCases.forEach((tc, index) => {
        const result = twoSum(tc.nums, tc.target);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: nums = [${tc.nums}], target = ${tc.target}`);
        console.log(`Expected: [${tc.expected}]`);
        console.log(`Output: [${result}]`);
        console.log(
            `Status: ${result.length === 2 &&
                result[0] === tc.expected[0] &&
                result[1] === tc.expected[1]
                ? '✅ Passed' : '❌ Failed'
            }\n`
        );
    });
}

// Run the tests
runTests();
