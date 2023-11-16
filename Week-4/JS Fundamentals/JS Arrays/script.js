function divideArray(Numbers) {
  const oddNums = [];
  const evenNums = [];
  const compareNums = (a, b) => a - b;

  for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] % 2 == 0) {
      evenNums.push(Numbers[i]);
    } else oddNums.push(Numbers[i]);
  }

  evenNums.sort(compareNums);
  oddNums.sort(compareNums);

  console.log("Even Numbers:");
  printArray(evenNums);

  console.log("Odd Numbers:");
  printArray(oddNums);
}

function printArray(nums) {
  if (nums.length == 0) console.log("None");
  else {
    for (let i = 0; i < nums.length; i++) console.log(nums[i]);
  }
}

divideArray([4, 2, 1, 8, 9]);
