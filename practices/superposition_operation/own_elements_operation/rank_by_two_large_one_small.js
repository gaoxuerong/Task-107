'use strict';
 //分组
 function part(arr){
  let newArr=[];
  for(let i=0;i<Math.ceil(arr.length/3);i++){
    let start=i*3;
    let end=start+3;
    newArr.push(arr.slice(start,end));
  }
  return newArr;
}//againOrder
function againOrder(arr){
  if(arr[2]){
    let newArr=[];
    newArr[0]=arr[1];
    newArr[1]=arr[2];
    newArr[2]=arr[0];
    return newArr;
  }else{
    return arr;
  }
}
function rank_by_two_large_one_small(collection){
  let arrSorted=[],finalRes=[],finalResultMid=[];
  arrSorted=collection.sort(function(a,b){return a-b;});
  let res=part(arrSorted);
  for(let item of res){
    finalResultMid= againOrder(item);
    finalRes=finalRes.concat(finalResultMid);
  }
  return finalRes;
}
module.exports = rank_by_two_large_one_small;
