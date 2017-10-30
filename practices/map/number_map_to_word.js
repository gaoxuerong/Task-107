'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result=[];
  result=collection.map(function(item){
    return  String.fromCharCode(item+96);
  })
  return result;
};

module.exports = number_map_to_word;
number_map_to_word([1,2,3,4,5])
