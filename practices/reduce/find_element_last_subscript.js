'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
 let result;
  let rev=collection.reverse();
  console.log(rev);
  for(let i=0;i<collection.length;i++){
    let index=rev.indexOf(element);
    console.log(index);
     result=collection.length-1-index;
  }
  console.log(result);
  return result;
}

module.exports = calculate_elements_sum;
calculate_elements_sum([1,11,27,20,4,9,15,4,1,11],4);