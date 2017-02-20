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
}

//尾部追加元素,append(element)
function append(element){
  this.dataStore.push(element);
  this.listSize++;
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




//example
//读文件，并删除数组末尾空格
function createArr(file){
  var arr = read(file).split("\n");
  for(var i=0; i<arr.length; ++i){
    arr[i] = arr[i].trim();
  }
  return arr;
}

//读取文件
var movies = createArr("films.txt");
//movies元素保存到列表中
var movieList = new List();
for(var i=0; i<movies.length; ++i){
  movieList.append(movies[i]);
}
//显示现有的清单
function displayList(list){
  for(list.front(); list.hasNext(); list.next()){
    if(list.getElement() instanceof Customer){
      print(list.getElement()["name"] + "," + list.getElement()["movie"]);
    } else {
      print(list.getElement());
    }
  }
}

//用户列表list,保存在系统中检索电影的用户
var customerList = new List();
//对象，包含用户的姓名和用户检索的电影
function Customer(name,movie){
  this.name = name;
  this.movie = movie;
}
/*
//允许客户检出电影的函数checkOut
function checkOut(name,movie,movieList,customerList){
  if(movieList.contains(movie)){
    movieList.remove(movie);
    var newCus = Customer(name,movie);
    customerList.append(newCus);
  } else {
    print("sorry," + movie + " is not avalible now.");
  }
}
*/

//exe04, 允许客户检出电影的函数checkOut，并加入已租列表
function checkOut(name,movie,movieList,hasRent,customerList){
  if(movieList.contains(movie)){
    movieList.remove(movie);
    hasRent.append(movie);
    var newCus = Customer(name,movie);
    customerList.append(newCus);
    print("\nhas been rent :");
    print(hasRent.toString());
  } else {
    print("sorry," + movie + " is not avalible now.");
  }
}

//exe05, 允许客户归还电影的函数checkIn，并加入现有列表
function checkIn(name,movie,movieList,hasRent,customerList){
  if(hasRent.contains(movie)){
    movieList.append(movie);
    hasRent.remove(movie);
    var newCus = Customer(name,movie);
    customerList.remove(newCus);
  } else {
    print("sorry," + movie + " is not a rented film.");
  }
}


print("Avalible movies:");
displayList(movieList);
print("Enter your name:")
var name = readline();
print("What movie would you like?");
var movie = readline();
var hasRent = new List();
checkOut(name,movie,movieList,hasRent,customerList);
print("\nCustomer Rentals:\n" + name + ", "+ movie);
print("\nMovies now available:");
displayList(movieList);
print("\nMovies now has been rent:");
displayList(hasRent);




print("------------------exe05-----------------")
print("Enter your name:")
var name = readline();
print("What movie would you like to give back?");
var movie = readline();
checkIn(name,movie,movieList,hasRent,customerList);
print("\nCustomer give back:\n" + name + ", "+ movie);
print("\nMovies now available:");
displayList(movieList);
print("\nMovies now has been rent:");
displayList(hasRent);











print("-----------------------------------");
