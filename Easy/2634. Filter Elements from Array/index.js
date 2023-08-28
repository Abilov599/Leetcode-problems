/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function filter(arr, fn) {
  const arrLength = arr.length;
  const newArr = [];

  for (let i = 0; i < arrLength; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const filtered = filter([1, 2, 3, 4], (el) => el % 2 === 0);

console.log(filtered); // [2, 4]