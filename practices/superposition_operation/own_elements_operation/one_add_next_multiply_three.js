'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  let res=[];
  for(let i=0;i<collection.length-1;i++){
      res.push((collection[i]+collection[i+1])*3);
  }
  //res.push(collection[collection.length-1]);
  return res;
}
module.exports = one_add_next_multiply_three;
