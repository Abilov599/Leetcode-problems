const ArrayWrapper = function (nums = []) {
  this.nums = nums;
};

// this code block will override the default behavior of the + operator.
ArrayWrapper.prototype.valueOf = function () {
  const sum = this.nums.reduce((total, current) => total + current, 0);
  return sum;
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
