// https://leetcode.com/problems/3sum/description/
//
// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (arr) {
    //sor the array 

    arr.sort((a,b) =>  a-b);
    let ans = [];

    for(let i =0; i<arr.length; i++){
        if(arr[i] != arr[i-1]){
            twoSum(arr, i , ans);
        }
    }

    return ans;

};

var twoSum = function (arr, x , ans) {
    let i = x + 1;
    let j = arr.length-1;

    while(i < j){
        let sum = arr[i] + arr[j] + arr[x];
        
        //if(sum === target) return [i + 1 , j + 1];

        if(sum > 0){
            j--;
        }else if(sum <0){
            i++;
        }else{
            ans.push([arr[x], arr[i], arr[j]]);
            i++;
            j--;
            while(i < j && arr[i] == arr[i-1]) i++;
        }
    }
};

// Basic tests
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));             // []
console.log(threeSum([0, 0, 0]));             // [[0,0,0]]
