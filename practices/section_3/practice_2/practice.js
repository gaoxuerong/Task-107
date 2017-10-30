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
     let sub =Math.floor(i.count/3); 
        i.count=i.count-sub;    
    }
  }
  console.log(res);
  return res;
}

module.exports = create_updated_collection;
