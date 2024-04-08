const readline = require('readline');

function sumOfArray(arr) {
  // Check if the input is an array and if it contains only integers
  if (!Array.isArray(arr) || arr.some(item => !Number.isInteger(item))) {
    throw new Error('Input must be an array of integers');
  }

  // Calculate the sum of all numbers in the array
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the array of integers separated by spaces: ', (input) => {
  const inputArray = input.split(' ').map(Number);

  try {
    const result = sumOfArray(inputArray);
    console.log('Sum of the provided integers:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }

  rl.close();
});
