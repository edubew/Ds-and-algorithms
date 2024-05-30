// Problem Statement: Write a function that takes an array of numbers and returns the maximum element in the array.

// Steps
// 1. Declare and iniialize the array variable
// 2. Check if the array is empty; if so, return 'Empty array'
// 3. Declare a variable to store the maxValue and initialize it to 0
// 4. Using a 'for' loop, iterate through each element of the array starting from index 1
// 5. On each iteration, compare the current element to the maxValue
// 6. If the current value is greater than the maxValue, update the maxValue
// 7. After the loop ends, return the maxValue

// SOLUTION
function findMaxElement(arr) {
  if (arr.length === 0) {
    return "The array is empty";
  }
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
