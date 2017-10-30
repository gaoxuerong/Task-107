'use strict';

function hybrid_operation(collection) {
  let arr=[];
  let result;
  //在这里写入代码
  for(let item of collection){
      arr.push(item*3+2);
  }
  
  result=arr.reduce(function(init,next){
    return init+next;
  },0);
  return result;
}

module.exports = hybrid_operation;

