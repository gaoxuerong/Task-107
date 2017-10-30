'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr=[],result,res;
  //在这里写入代码
  for(let item of collection){
    if(item%2!==0){
      arr.push(item);
    }
  }
  result=arr.reduce(function(init,next){
    return init+next;
  });
  res= result/arr.length;
  return res;
}

module.exports = average_uneven;
