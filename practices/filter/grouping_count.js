'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let obj={};
  for(let i=0;i<collection.length;i++){
    if(obj[collection[i]]){
      obj[collection[i]]++;
    }else{
      obj[collection[i]]=1;
    }
  }
  return obj;
}

module.exports = grouping_count;
