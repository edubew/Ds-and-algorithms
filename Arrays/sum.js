// Write a function that takes an array and returns the sum of all its elements.

// STEPS
// 1. Declare and initialize the array variable
// 2. Declare a 'sum' variable and initialize it to 0
// 3. Use a 'for' loop to iterate through all the elements of the array
// 4. On each iteration, add the value of the current element to the SubmitEvent
// 5. After the loop extends, return the 'sum'

// SOLUTION
function sumOfArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let array = [1, 2, 3, 4, 5];
console.log(sumOfArrays(array));
