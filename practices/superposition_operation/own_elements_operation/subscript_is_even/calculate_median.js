'use strict';
var calculate_median = function(collection){
    let arr=[],res;
    for(let item of collection){        
       if(item%2===0){
           arr.push(item);
       }
    }
    function minToMax(a,b){returna-b};
    arr.sort(arr);
    if(arr.length%2===0){
        return (arr[arr.length/2]+arr[arr.length/2-1])/2;
    }else{
        return arr[(arr.length-1)/2];
    }
};
module.exports = calculate_median;
