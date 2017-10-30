function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
function objTurnToArr(obj){
  for(let i in obj){
    if(i){
      return obj[i];
    }
  }
}
function collect_same_elements(collection_a, object_b) {
  let res=[];
  for(let i of collection_a){
    if(itemEqCollection(objTurnToArr(object_b),i)){
      res.push(i);
    }
  }
  console.log(res)
  return res;
}

module.exports = collect_same_elements;
