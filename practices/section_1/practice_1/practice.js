function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
function collect_same_elements(collection_a, collection_b) {
  let res=[];
  for(let i of collection_a){
    if(itemEqCollection(collection_b,i)){
      res.push(i);
    }
  }
  console.log(res)
  return res;
}

module.exports = collect_same_elements;
