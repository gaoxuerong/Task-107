'use strict';

function compute_average(collection) {
  let res=collection.reduce(function(init,current,currentIndex,collection){
    return init+current;
  },0);
  return res/collection.length;
}

module.exports = compute_average;

