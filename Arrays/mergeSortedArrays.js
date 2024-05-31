// Write a function that takes two sorted arrays and merges them into a single sorted array.

// STEPS
// function mergeSortedArray(arr1, arr2)
// create an empty array "mergedArray"
// Initialize 2 pointers i and j to 0
// while i < length of arr1 and length of arr2
// if arr1[i] < arr2[j]
// then add arr1[i] to mergedArray
// increment i
// else
// add arr2[j] to mergedArray
// increment j
// while i < length of arr1
// add arr1[i] to mergedArray
// increment i
// while j < length of arr2
// add arr2[j] to mergedArray
// increment j
// return mergedArray