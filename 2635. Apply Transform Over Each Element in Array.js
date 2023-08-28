// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  const newArr = new Array(arr.length);
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

console.log(map([1, 2, 3, 4], (x) => x * 2));
