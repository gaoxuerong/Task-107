'use strict';

function median_to_letter(collection) {
  
  //数字转换为字母
  function numToChar(item){
    let shang=parseInt(item/26);
    let yushu=item%26;
    if(shang===0){
     // console.log(String.fromCharCode(yushu+96));
      return String.fromCharCode(yushu+96);
    }else if(shang===1&&yushu===0){
        return 'z';
    }else if(shang>1&&yushu===0){
     
        return numToChar(shang-1)+'z';
    }else{
      //console.log(numToChar(shang)+String.fromCharCode(yushu+96));
      return numToChar(shang)+String.fromCharCode(yushu+96);
    }
  }
  
  //main
  if(collection[0]===collection[collection.length-1]){
   return numToChar(collection[0]);
  }else if(collection.length%2===0){
   let res=Math.ceil((collection[(collection.length)/2]+collection[(collection.length)/2-1])/2);
   return numToChar(res);
  }else{
   return  numToChar(collection[(collection.length-1)/2]);
  }
}

module.exports = median_to_letter;
