/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let max = 0;
    let i = 0 
    let j = arr.length - 1;

    while(i<j){
        let area = Math.min((arr[i], arr[j]) * (j-i));
        max = Math.max(max, area);

        if(arr[i] > arr[j]){
            j--;
        }else{
            i++;
        }
    }
    return max;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { height: [1, 1], expected: 1 },
    ];

    testCases.forEach((tc, index) => {
        const result = maxArea(tc.height);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: height = [${tc.height}]`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Output: ${result}`);
        console.log(
            `Status: ${result === tc.expected ? '✅ Passed' : '❌ Failed'}\n`
        );
    });
}

// Run the tests
runTests();
