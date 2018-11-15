const assert = require('chai').assert;
const bubbleSort = require('../sorting-suite')

describe("sorting suite", function(){
  context("bubble sorting", function(){
    it("can sort an array via bubble sort", function(){
      var reverse = [5, 4, 3, 2, 1];
      var forward = [1, 2, 3, 4, 5];
      var random = [3, 1, 5, 2, 4];
      assert.deepEqual(bubbleSort(reverse), [1, 2, 3, 4, 5]);
      assert.deepEqual(bubbleSort(forward), [1, 2, 3, 4, 5]);
      assert.deepEqual(bubbleSort(random), [1, 2, 3, 4, 5]);
    });
  });
});
