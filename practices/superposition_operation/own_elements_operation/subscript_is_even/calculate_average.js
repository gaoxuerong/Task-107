'use strict';
var calculate_average = function(collection){
    let arr=[],res;
 for(let item of collection){        
    if(item%2===0){
        arr.push(item);
    }
     res=arr.reduce(function(init,next){
        return init+next;
    },0);
 }
 return res/arr.length;
};
module.exports = calculate_average;
