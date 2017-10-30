'use strict';
var single_element = function(collection){
    let arrEven=[],res=[];
    for(let i=0;i<collection.length;i++){
        if(i%2!==0){
             arrEven.push(collection[i]);
        }
    }
    //
    function norepeat(a) { 
        var i = a.length, j, b; 
        while (i--) { 
        j = i; 
        b = false; 
        while (j--) { 
        if (a[i] === a[j]) { 
        a.splice(j, 1); 
        i--; 
        b = true; 
        } 
        } 
        if (b) a.splice(i, 1); 
        } 
        console.log(a);
        return a; 
        } 
    
    
    return norepeat(arrEven);
};
module.exports = single_element;
