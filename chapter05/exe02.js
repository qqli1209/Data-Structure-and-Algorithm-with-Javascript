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


print("-----------------------用Deque判断单词是否是回文----------------------");

function isPlalindrome(str){
  var q1 = new Deque();
  var q2 = new Deque();
  for (var i = 0; i < str.length; i++) {
    q1.enqueueHead(str[i]);
    q2.enqueueEnd(str[i]);
  }
  var str1 = "";
  var str2 = "";
  while (q1.count()>0) {
    str1 += q1.dequeueHead();
    str2 += q2.dequeueHead();
  }
  return str1==str2;
}

print("enter a string: ");
s = readline();
print(s + ": " + isPlalindrome(s));





















print("-----------------------------------------------");
