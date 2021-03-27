//Refractor to ES2015 version
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//Returns the smallest argument
const findMin = (...nums) => nums.reduce((num, val) => num < val ? num : val);
const findMin2 = (...nums) => Math.min(...nums);

//Accepts two objects and returns a new object which contains all the key values of the first and second object
const mergeObjects = (...)