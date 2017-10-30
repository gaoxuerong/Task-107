'use strict';
 let rank_desc=function (collection){
   let res=collection.map(function Map(i){
     return i;
   });
   res.sort(function(a,b){
     return a-b;
   })
   return res;
};

module.exports = rank_desc;
