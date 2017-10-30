'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  //let arr=[];
  let behalf=(collection+'').split('->');
  let k=behalf.map(function(x){
   return Number(x);
   });
console.log(k);
   if(k.length%2===0){
	return (k[parseInt((k.length-1)/2)]+ k[parseInt((k.length-1)/2+1)])/2;
    
   }else{
     return k[parseInt((k.length-1)/2)];
     
   }
}

module.exports = compute_chain_median;
//compute_chain_median('1->4->6->2->3->10->9->8->11->20->19->30');