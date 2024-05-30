// Problem Statement: Write a function that takes an array and returns a new array with the elements in reverse order.

// STEPS
// 1. Declare and initialize the array variable
// 2. Create an empty array to store the reversed array elements
// 3. Using a for loop, iterate through the initial array starting from the last element to the first one
// 4. On each iteration, add the current element to the new array
// 5. After the loop ends, return the new array

// SOLUTION
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i > 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
