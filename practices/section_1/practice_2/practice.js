function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
function mapCollection(collection){
  for(let i of collection){
   if(i){
    return i;
    console.log(i);
   }     
  }
}
function collect_same_elements(collection_a, collection_b) {
  let res=[];
  for(let i of collection_a){
    if(itemEqCollection(mapCollection(collection_b),i)){
      res.push(i);
    }
  }
  console.log(res)
  return res;
}

module.exports = collect_same_elements;
