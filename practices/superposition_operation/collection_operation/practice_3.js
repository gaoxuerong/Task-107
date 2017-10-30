'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let arr=[],result;
  //在这里写入代码
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2!==0){
      arr.push(collection[i]*3+5);
    }
  }
  result=arr.reduce(function(init,next){
    return init+next;
  },0);
  return result;
}

module.exports = hybrid_operation_to_uneven;

