//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

//You can trust that this function will never be called with n < 0 or n > 10.

// Write your code below this line.
function generateRandomList(n) {
  let nums = []

  // add non-repeating random numbers to the list
  while (nums.length < n) {
    let num = Math.floor(Math.random() * 10) + 1
    if (!nums.includes(num)) {
      nums.push(num)
    }
  }

  return nums
} 

const list = generateRandomList(5)
console.log(list)