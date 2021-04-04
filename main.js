//Refractor to ES2015 version
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//Returns the smallest argument
const findMin = (...nums) => Math.min(...nums);

//Accepts two objects and returns a new object which contains all the key values of the first and second object
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

//Accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled
const doubleAndReturnArgs = (arr, val) => [...arr, ...val.map(num => num * 2)];

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    [...items.splice(index, 1)];
    return items;
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {
        ...obj
    };
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {
        ...obj
    };
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj = {
        ...obj
    };
    newObj[key] = val;
    return newObj;
}