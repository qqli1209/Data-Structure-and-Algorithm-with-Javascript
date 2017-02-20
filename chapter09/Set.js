//集合
function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
  this.higher = higher;
  this.lower = lower;
}
//增加一个元素
function add(element){
  if(this.dataStore.indexOf(element)<0){
    this.dataStore.push(element);
    return true;
  }
  return false;
}
//删除一个元素
function remove(element){
  var index = this.dataStore.indexOf(element);
  if(index>-1){
    this.dataStore.splice(index,1);
    return true;
  }
    return false;
}
//元素个数
function size(){
  return this.dataStore.length;
}
//集合是否包含某个元素
function contains(element){
  if (this.dataStore.indexOf(element)>-1) {
    return true;
  }
  return false;
}
//并集
function union(otherSet){
  var out = new Set();
  for (var i = 0; i < this.dataStore.length; i++) {
    out.add(this.dataStore[i]);
  }
  for (var j = 0; i < otherSet.size(); j++) {
    if(out.contains(otherSet.dataStore[j])){
      out.dataStore.push(otherSet.dataStore[j]);
    }
  }
  return out;
}
//交集
function intersect(otherSet){
  var out = new Set();
  for (var i = 0; i < this.dataStore.length; i++){
    if (otherSet.contains(this.dataStore[i])) {
      out.add(this.dataStore[i]);
    }
  }
  return out;
}
//子集，第一个集合是否是第二个集合的子集
function subset(fatherSet){
  if(this.size()>fatherSet.size()) {return false;}
  for (var i = 0; i < this.size(); i++) {
    if(!fatherSet.contains(this.dataStore[i])){
      return false;
    }
  }
  return true;
}
//补集,在第一个集合，不在第二个集合的元素
function difference(fatherSet){
  var out = new Set();
  for (var i = 0; i < this.size(); i++) {
    if(!fatherSet.contains(this.dataStore[i])){
      out.add(this.dataStore[i]);
    }
  }
  return out;
}
//显示集合元素
function show(){
  print(this.dataStore);
}
//比element大的最小的那一个
function higher(element){
  var returnvalue;
  function compare(n1,n2){
    return n1-n2;
  }
  var flag = 0;
  if (this.contains(element)) {
    flag = 1;
  }
  this.add(element);
  this.dataStore.sort(compare);
  var index = this.dataStore.indexOf(element);
  if (index==this.size()-1) {
    returnvalue = null;
  } else {
    returnvalue = this.dataStore[index + 1];
  }
  if (flag==0) {
    this.remove(element);
  }
  return returnvalue;
}
//比element小的最大的那一个
function lower(element){
  var returnvalue;
  function compare(n1,n2){
    return n1-n2;
  }
  var flag = 0;
  if (this.contains(element)) {
    flag = 1;
  }
  this.add(element);
  this.dataStore.sort(compare);
  var index = this.dataStore.indexOf(element);
  if (index==0) {
    returnvalue = null;
  } else {
    returnvalue = this.dataStore[index - 1];
  }
  if (flag==0) {
    this.remove(element);
  }
  return returnvalue;
}
