/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let n = haystack.length;
    let m = needle.length;

    // i = candidate start position in haystack.
    // Only need to try starts where needle could still fully fit
    // (i.e. there are at least m characters left from i onward).
    for(let i = 0; i<= n-m; i++){
        //each character
        let j = 0;

        // j = position within needle being checked.
        // Compare needle[j] against haystack[i + j] (offset by the candidate start i).
        for(j = 0 ; j<m ; j++){
            if(needle[j] !== haystack[j+i]){
                // mismatch -> this start position i doesn't work, stop checking it
                break;
            }
        }

        // if j reached m, every character matched -> found needle starting at i
        if(j == m){
            return i;
        }
    }
    // no starting position produced a full match
   return -1;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { haystack: "sadbutsad", needle: "sad", expected: 0 },
        { haystack: "leetcode", needle: "leeto", expected: -1 },
        { haystack: "a", needle: "a", expected: 0 },
        { haystack: "mississippi", needle: "issip", expected: 4 },
        { haystack: "mississippi", needle: "a", expected: -1 },
    ];

    testCases.forEach((tc, index) => {
        const result = strStr(tc.haystack, tc.needle);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: haystack = "${tc.haystack}", needle = "${tc.needle}"`);
        console.log(`Expected: ${tc.expected}`);
        console.log(`Output: ${result}`);
        console.log(
            `Status: ${result === tc.expected ? '✅ Passed' : '❌ Failed'}\n`
        );
    });
}

// Run the tests
runTests();
