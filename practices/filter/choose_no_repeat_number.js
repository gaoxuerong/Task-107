'use strict';

function choose_no_repeat_number(collection) {
    
  var result=collection.filter(function (element, index, self) {
    　return self.indexOf(element) === index;
  });
  console.log(result);
  return result;
  
}

module.exports = choose_no_repeat_number;
//choose_no_repeat_number([NaN,undefined,null,1,2,34,54,12,1,2,54,34,21,43,NaN])