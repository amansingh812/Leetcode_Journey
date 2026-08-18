/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while(j < t.length){

        if(s[i] === t[j]){
            ++i;
        }
        j++;
        
    }

   return i === s.length;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { s: "abc", t: "ahbgdc", expected: true },
    ];

    testCases.forEach((tc, index) => {
        const result = isSubsequence(tc.s, tc.t);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: s = "${tc.s}", t = "${tc.t}"`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Output: ${result}`);
        console.log(
            `Status: ${result === tc.expected ? '✅ Passed' : '❌ Failed'}\n`
        );
    });
}

// Run the tests
runTests();
