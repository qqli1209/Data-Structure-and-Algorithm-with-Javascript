function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.length = length;
  this.clear = clear;
  this.prev = prev;
  this.next = next;
  this.moveTo = moveTo;
  this.append = append;
  this.insert = insert;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.currPos = currPos;
  this.hasNext = hasNext;
  this.hasPrev = hasPrev;
  this.getElement = getElement;
  this.toString = toString;
  this.find = find;
  this.contains = contains;
  this.insertBiggest = insertBiggest;
  this.insertSmallest = insertSmallest;
  this.showGender = showGender;
}

//尾部追加元素,append(element)
function append(element){
  this.dataStore[this.listSize++] = element;
}

//辅助函数find(element),查找某个元素
function find(element){
  for(var i=0; i<this.dataStore.length; ++i){
    if(this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}

//删除某个元素,reomve(element)
function remove(element){
  var rmPos = this.find(element);
  if(rmPos > -1){
    this.dataStore.splice(rmPos,1);
    this.listSize--;
    return true;
  }
  return false;
}

//列表元素个数,length()
function length(){
  return this.listSize;
}

//显示列表中的元素,toString()
function toString(){
  return this.dataStore;
}

//插入一个元素,insert()
function insert(element,afterElement){
  var pos = this.find(afterElement);
  if(pos < 0){
    print("不能找到元素" + afterElement);
    return false;
  }
  this.dataStore.splice(pos+1,0,element);
  this.listSize++;
  return true;
}

//清空列表所有元素，clear()
function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
}

//判断给定值是否在列表中
function contains(element){
  var pos = this.find(element);
  if(pos > -1){
    return true;
  }
  return false;
}

//遍历列表
//移到第一个元素
function front(){
  this.pos = 0;
}
//移到最后一个元素
function end(){
  this.pos = this.listSize - 1;
}
//移到上一个元素
function prev(){
  if(this.pos >= 0){
    this.pos--;
  }
  return false;
}
//移到下一个元素
function next(){
  if(this.pos < this.listSize){
    this.pos++;
  }
  return false;
}
//现在的pos
function currPos(){
  return this.pos;
}
//移到某个pos
function moveTo(n){
  if(n>-1 && n<this.listSize){
    this.pos = n;
  }
  return false;
}
//获取当前元素
function getElement(){
  return this.dataStore[this.pos];
}
//判断后一位
function hasNext(){
  return this.pos < this.listSize;
}
//判断前一位
function hasPrev(){
  return this.pos >= 0;
}
//exe01,向列表插入元素，只有该元素最大时才插入
function insertBiggest(ele){
  //分别用于存放数字和字符串
  var numEle = [];
  var stringEle = [];
  //输入为数字
  if(typeof ele == "number"){
    for(var i=0; i<this.length(); ++i){
      if(typeof this.dataStore[i] == "number"){
        numEle.push(this.dataStore[i]);
      }
    }
    var maxEle = Math.max.apply(Math, numEle);
    if(ele > maxEle){
      this.append(ele);
      return true;
    }
  }
  //输入为字母
  else if(typeof ele == "string"){
    for(var i=0; i<this.length(); ++i){
      if(typeof this.dataStore[i] == "string"){
        stringEle.push(this.dataStore[i]);
      }
    }
    var maxStr = stringEle.sort();
    var maxEle = maxStr[maxStr.length-1];
    if(ele > maxEle){
      this.append(ele);
      return true;
    }
  } else {
    return false;
  }
}

//exe02,向列表插入元素，只有该元素最小时才插入
function insertSmallest(ele){
  //分别用于存放数字和字符串
  var numEle = [];
  var stringEle = [];
  //输入为数字
  if(typeof ele == "number"){
    for(var i=0; i<this.length(); ++i){
      if(typeof this.dataStore[i] == "number"){
        numEle.push(this.dataStore[i]);
      }
    }
    var minEle = Math.min.apply(Math, numEle);
    if(ele < minEle){
      this.append(ele);
      return true;
    }
  }
  //输入为字母
  else if(typeof ele == "string"){
    for(var i=0; i<this.length(); ++i){
      if(typeof this.dataStore[i] == "string"){
        stringEle.push(this.dataStore[i]);
      }
    }
    var minStr = stringEle.sort();
    var minEle = minStr[0];
    if(ele < minEle){
      this.append(ele);
      return true;
    }
  } else {
    return false;
  }
}
//显示线相同性别的人的姓名
function showGender(gend){
  if(gend != "male" && gend != "famale"){
    print("please enter famale/male!");
    return false;
  }
  print(gend + " members :");
  for(var i=0; i<this.length(); ++i){
    if(this.dataStore[i] instanceof Person){
      if(this.dataStore[i].gender == gend){
        print(this.dataStore[i].name);
      }
    }
  }
  return true;
}


//test
var names = new List();
names.append("Elsie");
names.append("Ford");
names.append("Arnode");
names.append("Delos");
names.append("William");
names.append("Mave");
names.append("Bernarde");
names.front();
print(names.getElement()); //Elsie
names.moveTo(3);
print(names.getElement()); //Delos
names.remove("William"); //删除William
print(names.length());
print(names.toString());
names.prev();
print(names.getElement()); //Arnode
names.next();
names.next()
print(names.getElement()); //Mave
print("------------------------------");

//迭代器访问列表
//从前向后
for(names.front(); names.hasNext(); names.next()){
  print(names.getElement());
}
print("------------------------------");
//从后向前
for(names.end(); names.hasPrev(); names.prev()){
  print(names.getElement());
}





print("----------------test exe01 insertBiggest-------------")
var testexe01List1 = new List();
testexe01List1.append(2);
testexe01List1.append(3);
testexe01List1.append(4);
testexe01List1.append(8);
var testexe01List2 = new List();
testexe01List2.append("a");
testexe01List2.append("b");
testexe01List2.append("f");
testexe01List2.append("l");
testexe01List1.insertBiggest(5);
print(testexe01List1.toString());
testexe01List1.insertBiggest(10);
print(testexe01List1.toString());
testexe01List2.insertBiggest("c");
print(testexe01List2.toString());
testexe01List2.insertBiggest("l");
print(testexe01List2.toString());
testexe01List2.insertBiggest("z");
print(testexe01List2.toString());
print("----------------------------");
var testexe01List3 = new List();
testexe01List3.append(2);
testexe01List3.append(3);
testexe01List3.append(4);
testexe01List3.append(8);
testexe01List3.append("a");
testexe01List3.append("b");
testexe01List3.append("f");
testexe01List3.append("l");
print(testexe01List3.toString());
testexe01List1.insertBiggest(5);
print(testexe01List3.toString());
testexe01List3.insertBiggest(10);
print(testexe01List3.toString());
testexe01List3.insertBiggest("c");
print(testexe01List3.toString());
testexe01List3.insertBiggest("l");
print(testexe01List3.toString());
testexe01List3.insertBiggest("z");
print(testexe01List3.toString());

print("----------------test exe02 insertSmallest-------------")
var testexe01List1 = new List();
testexe01List1.append(2);
testexe01List1.append(3);
testexe01List1.append(4);
testexe01List1.append(8);
var testexe01List2 = new List();
testexe01List2.append("a");
testexe01List2.append("b");
testexe01List2.append("f");
testexe01List2.append("l");
testexe01List1.insertSmallest(5);
print(testexe01List1.toString());
testexe01List1.insertSmallest(1);
print(testexe01List1.toString());
testexe01List2.insertSmallest("c");
print(testexe01List2.toString());
testexe01List2.insertSmallest("A");
print(testexe01List2.toString());
testexe01List2.insertSmallest("Z");
print(testexe01List2.toString());
print("----------------------------");
var testexe01List3 = new List();
testexe01List3.append(2);
testexe01List3.append(3);
testexe01List3.append(4);
testexe01List3.append(8);
testexe01List3.append("a");
testexe01List3.append("b");
testexe01List3.append("f");
testexe01List3.append("l");
print(testexe01List3.toString());
testexe01List1.insertSmallest(5);
print(testexe01List3.toString());
testexe01List3.insertSmallest(1);
print(testexe01List3.toString());
testexe01List3.insertSmallest("c");
print(testexe01List3.toString());
testexe01List3.insertSmallest("A");
print(testexe01List3.toString());
testexe01List3.insertSmallest("Z");
print(testexe01List3.toString());




print("----------------test exe03 Person-------------")

//Person类
function Person(name,gender){
  this.name = name;
  this.gender = gender;
  this.show = show;
}
function show(){
  print("name : " + this.name + ", gender : " + this.gender);
}
var PersonList = new List();
var p1 = new Person("lqq","famale");
var p2 = new Person("dcq","famale");
var p3 = new Person("lqm","male");
var p4 = new Person("cy","famale");
var p5 = new Person("zwb","male");
var p6 = new Person("sbb","male");
var p7 = new Person("dcx","famale");
var p8 = new Person("dyj","male");
var p9 = new Person("cw","male");
var p10 = new Person("gch","famale");
PersonList.append(p1);
PersonList.append(p2);
PersonList.append(p3);
PersonList.append(p4);
PersonList.append(p5);
PersonList.append(p6);
PersonList.append(p7);
PersonList.append(p8);
PersonList.append(p9);
PersonList.append(p10);
print("choose gender(male/famale) to check:");
var genderInput = readline();
PersonList.showGender(genderInput);
