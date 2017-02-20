//dictionary 类
function Dictionary(){
  this.dataStore = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear  = clear;
  this.wordCount = wordCount;
}
//增加元素
function add(key,value){
  this.dataStore[key] = value;
}
//查找
function find(key){
  return this.dataStore[key];
}
//删除
function remove(key){
  delete this.dataStore[key];
}
//显示所有键值-对
function showAll(){
    for (var key in this.dataStore){
      print(key + " -> " + this.dataStore[key]);
    }
}
/*
//有序地显示所有键值-对
function showAll(){
    for (var key in Object.keys(this.dataStore).sort()){
      print(key + " -> " + this.dataStore[key]);
    }
}
*/

//字典中元素的数量
function count(){
  var n = 0;
  for(var key in this.dataStore){
    n++;
  }
  return n;
}
//清空字典
function clear(){
  delete this.dataStore;
  this.dataStore = [];
}
//单词个数
function wordCount(words){
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (this.find(word)>0) {
      (this.dataStore[word])++;
    } else {
      this.add(word,1);
    }
  }
}
