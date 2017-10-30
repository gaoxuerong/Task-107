'use strict';
var even_asc_odd_desc = function(collection){
let even=[],odd=[],res=[];
for(let item of collection){
    if(item%2===0){
        even.push(item);
    }else{
        odd.push(item);
    }
}
function minToMax(a,b){return a-b;}
function maxToMin(a,b){return b-a;}
even.sort(minToMax);
odd.sort(maxToMin);
res=even.concat(odd);

return res;
};
module.exports = even_asc_odd_desc;
