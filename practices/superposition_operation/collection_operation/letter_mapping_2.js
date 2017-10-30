'use strict';

function average_to_letter(collection) {
  let add=0;
  for(let i=0;i<collection.length;i++){
    add=add+collection[i];
  }
 var shang=Math.ceil(add/collection.length);

 //数字转换为字母
 function numToChar(item){
  let shang=parseInt(item/26);
  let yushu=item%26;
  if(shang===0){
    return String.fromCharCode(yushu+96);
  }else if(shang===1&&yushu===0){
      return 'z';
  }else if(shang>1&&yushu===0){
      return numToChar(shang-1)+'z';
  }else{
    return numToChar(shang)+String.fromCharCode(yushu+96);
  }
}
let res=numToChar(shang);
return res;
}

module.exports = average_to_letter;

