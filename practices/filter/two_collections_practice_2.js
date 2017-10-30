'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  for(let i=0;i<collection_a.length;i++){
    for(let j=0;j<collection_b.length;j++){
      if(collection_a[i]===collection_b[j]){
        collection_a.splice(i,1);
      }
    }
  }
  return collection_a;
}

module.exports = choose_no_common_elements;
