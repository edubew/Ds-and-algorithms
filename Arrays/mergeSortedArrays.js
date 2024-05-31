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

// SOLUTION
function mergeSortedArray(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}
