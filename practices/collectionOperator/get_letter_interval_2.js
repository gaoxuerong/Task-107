'use strict';

function get_letter_interval_2(number_a, number_b) {
  
  //数字转化为字母
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
  //比较大小
  function compare(number_a,number_b){
    let arr=[];
    if(number_a>number_b){
      for(let j=number_a;j>=number_b;j--){
        arr.push(numTransChar(j));
      }
    }else{
      for(let i=number_a;i<=number_b;i++){
        arr.push(numTransChar(i));
      }
    }
    return arr;
  }
  //main
  if(number_a===number_b){
   return  [numTransChar(number_a)];
  }else {
    return compare(number_a,number_b);
  }
}

module.exports = get_letter_interval_2;

