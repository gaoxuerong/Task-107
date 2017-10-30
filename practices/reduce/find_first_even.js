'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let arr=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      arr.push(collection[i]);
    }
  }
  let res=arr[0];
  return res;
}

module.exports = find_first_even;

