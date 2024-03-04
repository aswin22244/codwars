// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


class SmallestIntegerFinder {
    findSmallestInt(args) {
      const out = args.sort((a, b) => (a - b));
      return out[0];
    }
  }


  const finder = new SmallestIntegerFinder(); // Create an instance of the class
const args = [34, 15, 88, 2];
console.log(finder.findSmallestInt(args)); 