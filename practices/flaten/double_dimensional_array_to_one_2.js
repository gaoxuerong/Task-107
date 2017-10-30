'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let newArr=(collection+'').split(',');
  let newArray=newArr.map(function(x){
    return Number(x);
  })
  let result=Array.from(new Set(newArray));
  console.log(result);
  return result;
}

module.exports = double_to_one;
double_to_one([1,2,3,4,5,[4,3,2],1]);