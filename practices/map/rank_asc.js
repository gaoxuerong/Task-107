'use strict';
var rank_asc = function(collection){
  let res=collection.map(function Map(i){
    return i;
  });
  res.sort(function(a,b){
    return b-a;
  })
  return res;
};

module.exports = rank_asc;
