// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


var getIntersectionNode = function (headA, headB) {

    if (!headA || !headB) return null;

    // Two pointers: when one reaches the end, redirect it to the other
    // list's head. Because pA travels (a + c + b) and pB travels
    // (b + c + a), they cover equal total distances and meet exactly
    // at the intersection node (or both hit null at the same time).
    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
 
    return pB; // intersection node, or null if no intersection
};
// --- Helpers to build test lists ---

// Builds a linked list from an array of values, returns the head.
function buildList(vals) {
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const v of vals) {
        curr.next = new ListNode(v);
        curr = curr.next;
    }
    return dummy.next;
}

// Builds two intersecting lists per LeetCode's format:
// listA = aVals + sharedVals, listB = bVals + sharedVals (same shared tail nodes)
function buildIntersectingLists(aVals, bVals, sharedVals) {
    const shared = buildList(sharedVals);

    const headA = buildList(aVals);
    if (headA) {
        let tail = headA;
        while (tail.next) tail = tail.next;
        tail.next = shared;
    }

    const headB = buildList(bVals);
    if (headB) {
        let tail = headB;
        while (tail.next) tail = tail.next;
        tail.next = shared;
    }

    return {
        headA: headA || shared,
        headB: headB || shared,
        expected: shared ? shared.val : null,
    };
}

// --- Test Cases ---
function runTests() {
    const testCases = [
        // listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersect at val 8
        buildIntersectingLists([4, 1], [5, 6, 1], [8, 4, 5]),
        // listA = [1,9,1,2,4], listB = [3,2,4], intersect at val 2
        buildIntersectingLists([1, 9, 1], [3], [2, 4]),
        // no intersection
        { ...buildIntersectingLists([2, 6, 4], [1, 5], []), expected: null },
    ];

    testCases.forEach((tc, index) => {
        const result = getIntersectionNode(tc.headA, tc.headB);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Output: ${result ? result.val : null}`);
        console.log(`Expected: ${tc.expected}`);
        console.log(
            `Status: ${(result ? result.val : null) === tc.expected ? '✅ Passed' : '❌ Failed'}\n`
        );
    });
}

// Run the tests
runTests();
