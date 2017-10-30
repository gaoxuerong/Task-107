'use strict';
function map_to_even(collection){
  let result=[];
  result=collection.map(function(item){
    return item*2;
  })
  console.log(result);
  return result;

  //return [2,4,6,8,10];
}
module.exports = map_to_even;
map_to_even([1,2,3,5,1]);
