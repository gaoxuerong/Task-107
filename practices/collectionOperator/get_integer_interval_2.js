'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr=[];
  if(number_a<number_b){
    for(let a=number_a;a<=number_b;a++){
      if(a%2==0){
        arr.push(a);     
      }
    }
  }else if(number_a>number_b){
    for(let b=number_a;b>number_b;b--){
      if(b%2==0){
        arr.push(b);   
          
      }
    }
  }else{
    arr.push(number_a);
   
  }
 
  return arr;
}

module.exports = get_integer_interval_2;
//get_integer_interval_2(1,10);
//get_integer_interval_2(10,1);
//get_integer_interval_2(10,10);