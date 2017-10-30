'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  function three(value){
    return value%3===0;
  }
  var result=collection.filter(three);
  console.log(result);
  return result;
}

module.exports = choose_multiples_of_three;
//choose_multiples_of_three([0,-3,6,8,9,43,2,1,34,21,32]);