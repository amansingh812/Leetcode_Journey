/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    let lps = [0];
    let i = 0;
    let j = 1;

    //writhin code for lps
    while(j < m){
        if(needle[i] == needle[j]){
            lps[j] = i + 1;
            i++;
            j++;
        }else{
            if(i == 0){
                lps[i] = 0;
                j++;
            } else{
                i = lps[i - 1];
            }
        }
    }
    i = j = 0;
    while(i < n) {
        if(haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else{
            if(j==0) {
                ++i;
            } else {
                j = lps[j-1];
            }
        }
        if(j === m){
            return i - m;
        }
    }
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
