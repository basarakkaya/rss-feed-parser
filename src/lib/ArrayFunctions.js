Array.prototype.mymap = function (callback) {
  let newArr = [];

  for (var i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i);
  }
  return newArr;
};

Array.prototype.myfilter = function (callback) {
  let newArr = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

Array.prototype.myreduce = function (callback, accumulator) {
  for (var i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};
