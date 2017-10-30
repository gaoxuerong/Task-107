'use strict';
var even_group_calculate_average = function(collection){
    let arrEven=[],res=[],result=[];
    let a=[],b=[],c=[];
    for(let i=0;i<collection.length;i++){
        if(i%2!==0){
           arrEven.push(collection[i]); 
        }
    }
    for(let item of arrEven){
        if(item%2===0){
            result.push(item);
        }
    }
    if(result.length===0){
        res=[0];
    }else{
        for(let item of result){
            if(item/1>=1&&item/1<10){
                a.push(item);
            }else if(item/1>=10&&item/1<100){
                b.push(item);
            }else if(item/1>=100&&item/1<1000){
                c.push(item);
            }  
        }
        if(a.length>0){
            res.push(a.reduce(function(init,next){return init+next;},0)/a.length); 
        }
        if(b.length>0){
            res.push(b.reduce(function(init,next){return init+next;},0)/b.length);
        }
        if(c.length>0){
            res.push(c.reduce(function(init,next){return init+next;},0)/c.length);
        }
    }
    console.log(res);
    return res;
};
module.exports = even_group_calculate_average;
