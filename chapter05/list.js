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
  return this.dataStore.shift();
}
//判断队列是否为空
function isEmpty(){
  return this.dataStore.length == 0;
}
//转为字符串
function toString(){
  return this.dataStore.join(",");
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
//显示队元素个数
function count(){
  return this.dataStore.length;
}

//test
print("-----------------------Queue test-------------------");
var q = new Queue();
q.enqueue("Elsie");
q.enqueue("Ford");
q.enqueue("Mave");
print(q.toString());
q.dequeue();
print(q.toString());
print("front of q is : " + q.front());
print("back of q is : " + q.back());

print("-------------------------------\n\n");


//方块舞的舞伴分配问题
print("-----------------------方块舞的舞伴分配问题-------------------");
//储存舞者信息的类
function Dancer(name,sex){
  this.name = name;
  this.sex = sex;
}
//将舞者信息从文件读出
function getDancers(males,famales){
  var names = read("dancers.txt").split("\n");
  for(var i=0; i<names.length; ++i){
    names[i] = names[i].trim();
  }
  for(var i=0; i<names.length; ++i){
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if(sex=="F"){
      famales.enqueue(new Dancer(name,sex));
    } else if (sex=="M"){
      males.enqueue(new Dancer(name,sex));
    }
  }
}

//将男性和女性组成舞伴，并宣布配对结果
function dance(males,famales){
  print("The dance partners are:\n");
  while(!males.isEmpty() && !famales.isEmpty()){
    print("male: " + males.dequeue().name + " and famale: "
    + famales.dequeue().name + " dance together");
  }
}

//显示排队等候的男性和女性的数量
function showWait(males,famales){
  if(males.count()>0){
    print("There are " + males.count() + " males are waiting.")
  }
  if(famales.count()>0){
    print("There are " + famales.count() + " famales are waiting.")
  }
}

//test
//新建男女舞者队列
var maleDancers = new Queue();
var famaleDancers = new Queue();
//得到男女舞者名字，初始化上述队列
getDancers(maleDancers,famaleDancers);
//分配舞伴
dance(maleDancers,famaleDancers);
//报出等待中的男女舞者数量
showWait(maleDancers,famaleDancers);

print("-------------------------------\n\n");
