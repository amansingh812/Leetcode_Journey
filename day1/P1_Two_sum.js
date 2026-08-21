/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    // Step 2: Loop through nums again and check if complement exists in Map
    for (let i = 0; i < nums.length; i++) {
        const sum = target - nums[i];

    
        // 1. Does the complement exist in the map?
        // 2. Is it a DIFFERENT index (cannot use the same element twice)?
        if (map.has(sum) && map.get(sum) !== i) {
            return [i, map.get(sum)]
        }
    }

    return [-1, -1];
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
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
