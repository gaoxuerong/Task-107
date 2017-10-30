'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let arr=[];
  for(let even of collection){
    if(even%2===0){
      arr.push(even);
    }
  }
  return arr;
}

module.exports = collect_all_even;
