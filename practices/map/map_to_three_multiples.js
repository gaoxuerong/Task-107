'use strict';
var map_to_three_multiples = function(collections){
 // return [3,9,15,12,27];
 let result=[];
  result=collections.map(function(item){
    return  item*3;
  })

 return result;
};

module.exports = map_to_three_multiples;
map_to_three_multiples([1,2,3])
