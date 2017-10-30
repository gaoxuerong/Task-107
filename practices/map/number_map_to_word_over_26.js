//'use strict';
var number_map_to_word_over_26= function (collection){
  //数字转换为字母
  let result=[];
  function numTransChar(num){
    let yushu=num%26;
    let shang=parseInt(num/26);
    if(shang===0){
      return  String.fromCharCode(yushu+96);
    }else if(shang===1&&yushu===0){
      return 'z';
    }else if(shang>1&&yushu===0){
      return numTransChar(shang-1)+'z';
    }else{
      return  numTransChar(shang)+String.fromCharCode(yushu+96);
    }
  }
  result=collection.map(function(item){
    return  numTransChar(item);
  })
  return result;
};
module.exports = number_map_to_word_over_26;

