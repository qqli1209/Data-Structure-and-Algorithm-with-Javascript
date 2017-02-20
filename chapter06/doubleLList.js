//Node类
function Node(element){
  this.element = element;
  this.next = null;
  this.previous = null;
}

//双向链表 doubleLList类
function doubleLList(){
  this.head = new Node("head");
  this.remove = remove;
  this.insert = insert;
  this.find = find;
  this.display = display;
  this.displayReverse = displayReverse;
  this.findLast = findLast;
  this.back = back;
}
//查找某个元素
function find(item){
  var currNode = this.head;
  while (currNode.element!=item) {
    currNode = currNode.next;
  }
  return currNode;
}
//在已知节点后面插入元素
function insert(newElement,item){
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  //如果下一个元素非空，还要指向当前插入的节点
  if (currNode.next!=null) {
    currNode.next.previous = newNode;
  }
  newNode.previous = currNode;
  newNode.next = currNode.next;
  currNode.next = newNode;
}
//删除指定元素
function remove(item){
  var currNode = this.find(item);
  if (currNode.next!=null) {
    currNode.next.previous = currNode.previous;
  }
  currNode.previous.next = currNode.next;
  currNode.previous = null;
  currNode.next = null;
}

//显示链表中的元素
function display(){
  var currNode = this.head;
  var str = "";
  while (currNode.next!=null) {
    str += currNode.next.element + "\n";
    currNode = currNode.next;
  }
  print(str);
}

//找出最后一个节点
function findLast(){
  var currNode = this.head;
  while (currNode.next!=null) {
    currNode = currNode.next;
  }
  return currNode;
}
//反序显示链表
function displayReverse(){
  var str = "";
  var currNode = this.findLast();
  while (currNode.previous!=null) {
    str += currNode.element + "\n";
    currNode = currNode.previous;
  }
  print(str);
}

//test
var cities = new doubleLList();
print("---------------insert node----------------");
cities.insert("Nanjing","head");
cities.display();
cities.insert("Hangzhou","Nanjing");
cities.display();
cities.insert("Suqian","Hangzhou");
cities.display();
cities.insert("Nantong","Hangzhou");
cities.display();
cities.insert("Siyang","Nantong");
cities.display();
cities.insert("Xuyi","Suqian");
cities.display();
cities.displayReverse();
print("last node: " + cities.findLast().element);

print("-----------------remove node--------------");
cities.remove("Hangzhou");
cities.display();
cities.remove("Xuyi");
cities.display();
cities.remove("Nantong");
cities.display();
cities.remove("Nanjing");
cities.display();
print("last node: " + cities.findLast().element);


print("-----------------exe02--------------");


//当前节点向后移n个节点
/*
function back(item,n){
  var currNode = this.find(item);
  var backNode = currNode;
  for (var i = 0; i < n; i++) {
    if (backNode.next!=null) {
      backNode = backNode.next;
    } else {
      print(n + " after " + item + " overflow.");
      return false;
    }
  }
  if (backNode.next!=null) {
    backNode.next.previous = currNode;
  }
  currNode.previous.next = currNode.next;
  currNode.next.previous = currNode.previous;
  currNode.previous = backNode;
  currNode.next = backNode.next;
  backNode.next = currNode;
}
*/

function back(currNode,n){
  var backNode = currNode;
  for (var i = 0; i < n; i++) {
    if (backNode.next!=null) {
      backNode = backNode.next;
    } else {
      print(n + " after " + currNode.element + " overflow.");
      return false;
    }
  }
  if (backNode.next!=null) {
    backNode.next.previous = currNode;
  }
  currNode.previous.next = currNode.next;
  currNode.next.previous = currNode.previous;
  currNode.previous = backNode;
  currNode.next = backNode.next;
  backNode.next = currNode;
}




cities.insert("Hangzhou","Siyang");
cities.insert("Shanghai","Hangzhou");
cities.insert("Beijing","Shanghai");
cities.insert("Shenyang","Suqian");
print("previous double linked list:");
cities.display();

var newNode = cities.find("Hangzhou");
cities.back(newNode,3);
cities.display();
var newNode = cities.find("Hangzhou");
cities.back(newNode,1);
cities.display();
var newNode = cities.find("Hangzhou");
cities.back(newNode,1);
cities.display();
var newNode = cities.find("Shanghai").next;
cities.back(newNode,2);
cities.display();

print("-----------------------------------------");
