'use strict';
function get_union(collection_a,collection_b){
//   let arr=collection_a; 
    
//   for(let i=0;i<collection_b.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[j]===collection_b[i]){}
//       else{}
//     }
   
//   }
//   console.log(arr);
// return arr;

    let result = collection_a;

    for(let item of collection_b){
        if(result.indexOf(item)===-1){
            result.push(item);
        }
    }

    return result;

    
}

module.exports = get_union;
let cct = get_union([1,2,3,4,5],[2,4,5,7]);
console.log(cct);