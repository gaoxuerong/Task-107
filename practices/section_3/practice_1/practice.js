//判断是否相等
function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
//获取对象单个属性
function getObjChild(obj){
  for(let i in obj){
    if(i){
      return obj[i];
    }
  }
}
function create_updated_collection(collection_a, object_b) {
  let res=collection_a;
  for(let i of collection_a){
    if(itemEqCollection(getObjChild(object_b),getObjChild(i))){   
        i.count=i.count-1;    
    }
  }
  console.log(res);
  return res;
}

module.exports = create_updated_collection;
