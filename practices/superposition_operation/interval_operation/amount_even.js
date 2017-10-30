'use strict';

function amount_even(collection) {
  let arr=[],result;
  //在这里写入代码
  for(let item of collection){
    if(item%2===0){
      arr.push(item);
    }
  }
  result=arr.reduce(function(init,next){
    return init+next;
  });
  return result;
}

module.exports = amount_even;
