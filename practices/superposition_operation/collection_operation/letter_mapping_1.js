'use strict';

function even_to_letter(collection) {
  let arrEven=[],result=[];
  //得到的偶数变成数组
  for(let item of collection){
    if(item%2===0){
      arrEven.push(item);
    }
  }
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
  //
  for(let i=0;i<arrEven.length;i++){
    result.push(numToChar(arrEven[i]));
  }
  return result;
}

module.exports = even_to_letter;
