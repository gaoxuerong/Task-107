'use strict';

function choose_even(collection) {
  let even_collection= collection.filter(function even(item){
    return item%2===0;
  });
  console.log(even_collection);
  return even_collection;
}

module.exports = choose_even;
// choose_even([0,2,6,78,54,32,24,33,11,54,23,77,43,25,78])
