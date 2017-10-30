'use strict';
var is_exist_element =function (collection,element){
    let arrEven=[];
    for(let i=0;i<collection.length;i++){
        if(i%2===0){
            arrEven.push(collection[i]);
        }
    }
    //console.log(arrEven);
    for(let item=0;item<arrEven.length;item++){
        if(arrEven[item]===element){
            return true;
        }
    }
    for(let item=0;item<arrEven.length;item++){
        if(arrEven[item]!==element){
            return false;
        }
    }
};
module.exports = is_exist_element;