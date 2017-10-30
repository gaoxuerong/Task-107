'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  let a=collection[collection.length-1];
  console.log(a);
  return a;
}

module.exports = collect_last_element;
collect_last_element([1,2,3,4,5]);