//队列
function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.isEmpty = isEmpty;
  this.toString = toString;
  this.front = front;
  this.back = back;
  this.count = count;
}
//入队
function enqueue(element){
  this.dataStore.push(element);
}
//出队
function dequeue(){
  var entry = 0;
  for(var i=0; i<this.dataStore.length; ++i){
    if(this.dataStore[i].code<this.dataStore[entry].code){
      entry = i;
    }
  }
  return this.dataStore.splice(entry,1);
}
//判断队列是否为空
function isEmpty(){
  return this.dataStore.length == 0;
}
//显示队元素个数
function count(){
  return this.dataStore.length;
}
//转为字符串，针对Patient类
function toString(){
  var str = [];
  for (var i = 0; i < this.count(); i++) {
    str += "name: " + this.dataStore[i].name + ", code: " + this.dataStore[i].code + "\n";
  }
  return str;
}
//读取队首元素
function front(){
  if(this.dataStore.length>0){
    return this.dataStore[0];
  } else {
    return false;
  }
}
//读取队尾元素
function back(){
  if(this.dataStore.length>0){
    return this.dataStore[this.dataStore.length-1];
  } else {
    return false;
  }
}


print("------------------------优先队列------------------------");
//优先队列
//病人类
function Patient(name,code){
  this.name = name;
  this.code = code;
}

var patient = new Queue;
patient.enqueue(new Patient("Elsie",4));
patient.enqueue(new Patient("Ford",3));
patient.enqueue(new Patient("Delos",4));
patient.enqueue(new Patient("Willaim",2));
patient.enqueue(new Patient("Arnod",2));
patient.enqueue(new Patient("Mave",1));
patient.enqueue(new Patient("Bernade",3));
patient.enqueue(new Patient("Alliy",5));
patient.enqueue(new Patient("Emic",2));
patient.enqueue(new Patient("Teddy",3));
patient.enqueue(new Patient("MIB",4));
patient.enqueue(new Patient("Willy",5));
patient.enqueue(new Patient("Sindy",4));
print("people waiting:");
print(patient.toString());
//第一轮
print("being servered: " + patient.dequeue()[0].name);
print("people waiting:");
print(patient.toString());
//第二轮
print("being servered: " + patient.dequeue()[0].name);
print("people waiting:");
print(patient.toString());
//第三轮
print("being servered: " + patient.dequeue()[0].name);
print("people waiting:");
print(patient.toString());

print("------------------------------------------------");
