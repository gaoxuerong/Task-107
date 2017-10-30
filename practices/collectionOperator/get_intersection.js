'use strict';

function get_intersection(number_a, number_b) {
  //在这里写入代码
  let arr=[];
  for(let i=0;i<number_b.length;i++){
    for(let j=0;j<number_a.length;j++){
        if(number_b[i]===number_a[j]){
            arr.push(number_b[i]);
        }
    }  
  }
  return arr;
}

module.exports = get_intersection;