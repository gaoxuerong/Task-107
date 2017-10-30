'use strict';

function choose_common_elements(collection_a, collection_b) {

  // one methods
  let arr=[];
  for(let i=0;i<collection_a.length;i++){
     for(let j=0;j<collection_b.length;j++){
     if(collection_a[i]===collection_b[j]){
     arr.push(collection_a[i]);
     }
  }
  }
 return arr;

}

module.exports = choose_common_elements;
