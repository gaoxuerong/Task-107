function number(collection){
  let res=[],obj={};
     for(let item of collection){
       if(!obj[item]){
        obj[item]={};
        obj[item].key=item;
        obj[item].count=1;
       }else{
        obj[item].count++;
       }
     }
    for(let i in obj){
       res.push(obj[i]);
    }
     console.log(res)
      return res;
}
function count_same_elements(collection) {
  return number(collection);
}

module.exports = count_same_elements;
