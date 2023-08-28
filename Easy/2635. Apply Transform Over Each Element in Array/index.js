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
