'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
 var res= collection.reduce(function(a,b){
    return a+b;
  },0);
  return res;
}

module.exports = calculate_elements_sum;

