    'use strict';

 function spilt_to_zero(number, interval) {
   //在这里写入代码
   let res=[];
    if(number>0){
        for(let i=number;parseFloat(i+interval).toFixed(1)>0;i=i-interval){
          res.push(parseFloat(i.toFixed(1)));
        }
    }
  
   console.log(res);
   return res;
 }

 module.exports = spilt_to_zero;

 //spilt_to_zero(0.8, 0.2)

