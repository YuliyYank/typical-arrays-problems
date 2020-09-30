
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  var little = Infinity;
  for (var i = 0; i < array.length; i++) {
    var num = array[i]; 
    var minNum = Math.min(little, num);
    if (minNum <= little) {
      little = minNum;
    }
  }
  return minNum;
};

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  var maxi = -Infinity;
  for (var i = 0; i < array.length; i++) {
    var num = array[i]; 
    var maxNum = Math.max(maxi, num);
    if (maxNum >= maxi) {
      maxi = maxNum;
    }
  }
  return maxNum;
};

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < array.length; i ++) {
    sum = sum + array[i];
  }
  var avge = sum / array.length;
  return avge;
};
