function Deque(){
  this.dataStore = [];
  this.enqueueEnd = enqueueEnd;
  this.enqueueHead = enqueueHead;
  this.dequeueEnd = dequeueEnd;
  this.dequeueHead = dequeueHead;
  this.toString = toString;
  this.count = count;
  this.isEmpty = isEmpty;
  this.front = front;
  this.back = back;
}
//尾端入队
function enqueueEnd(element){
  this.dataStore.push(element);
}
//首端入队
function enqueueHead(element){
  this.dataStore.unshift(element);
}
//尾端出队
function dequeueEnd(){
  return this.dataStore.pop();
}
//首端出队
function dequeueHead(){
  return this.dataStore.shift();
}
//转为字符串
function toString(){
  var str = [];
  for(var i=0; i<this.dataStore.length; ++i){
    str += this.dataStore[i] + "\n";
  }
  return str;
}
//队列元素数量
function count(){
  return this.dataStore.length;
}
//队列是否为空
function isEmpty(){
  return this.dataStore.length == 0;
}
//队列的第一个元素
function front(){
  if (this.dataStore.length>0) {
    return this.dataStore[0];
  }
  return false;
}
//队列最后一个元素
function back(){
  if (this.dataStore.length>0) {
    return this.dataStore[this.dataStore.length-1];
  }
  return false;
}


print("-----------------------test----------------------");

var d = new Deque();
d.enqueueEnd("3");
d.enqueueEnd("4");
d.enqueueHead("2");
d.enqueueHead("1");
print(d.toString()); //1,2,3,4

d.dequeueEnd();
print(d.toString()); //1,2,3
d.dequeueHead();
print(d.toString()); //2,3
print(d.count()); //2,3









print("-----------------------------------------------");
