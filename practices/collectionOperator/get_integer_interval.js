'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let arr=[];
  if(number_a<number_b){
    for(let a=number_a;a<=number_b;a++){
     
        arr.push(a);     
     
    }
  }else if(number_a>number_b){
    for(let b=number_a;b>=number_b;b--){
      
        arr.push(b);   
          
     
    }
  }else{
    arr.push(number_a);
   
  }
  console.log(arr);
  return arr;
}

module.exports = get_integer_interval;
//get_integer_interval(1,10);
//get_integer_interval(10,1);
//get_integer_interval(10,10);


