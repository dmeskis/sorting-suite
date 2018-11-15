function swap(array, i, x) {
  var temp = array[i];
  array[i] = array[x];
  array[x] = temp;
}

function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var x = 1; x < array.length; x++) {
      if(array[x - 1] > array[x]) {
        swap(array, x - 1, x);
      }
    }
  }
  return array;
}

module.exports = bubbleSort
