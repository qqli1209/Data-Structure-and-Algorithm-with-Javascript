//Node类保存节点数据和指向下一个节点的链接
function Node(element){
  this.element = element;
  this.next = null;
}
//LList类提供对链表操作的方法
function LList(){
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.find = find;
  this.head = new Node("head");
  this.findPrevious = findPrevious;
  this.advance = advance;
  this.show = show;
}
//查找节点
function find(item){
  var currNode = this.head;
  while(currNode.element!=item){
    currNode = currNode.next;
  }
  return currNode;
}
//在已知节点后面插入元素
function insert(newElement,item){
  var newNode = new Node(newElement);
  var itemNode = this.find(item);
  newNode.next = itemNode.next
  itemNode.next = newNode;
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
//找出下一个节点元素是为某个指定元素的节点
function findPrevious(item){
  var currNode = this.head;
  while (currNode.next.element!=item) {
    currNode = currNode.next;
  }
  return currNode;
}
//删除某个节点的元素
function remove(item){
  var removeNodePrevious = this.findPrevious(item);
  var currNode = removeNodePrevious.next;
  removeNodePrevious.next = currNode.next;
  currNode.next = null;
}

//test
print("----------------------test------------------------");
var cities = new LList();
cities.insert("Nanjing","head");
cities.insert("Hangzhou","Nanjing");
cities.insert("Suqian","Hangzhou");
cities.display(); //Nanjing Hangzhou Suqian

cities.remove("Hangzhou");
cities.display(); //Nanjing Suqian
cities.insert("Siyang","Suqian");
cities.insert("Xinyuan","Siyang");
cities.insert("Liuji","Xinyuan");
cities.display();


//exe01
//print("--------------------exe01----------------------");
/*
//向前移动n个节点
function advance(item,n){
  var currNode = this.find(item);
  var justPreviousNode = this.findPrevious(item);
  while (n>=0) {
    previousNode = this.findPrevious(item);
    item = previousNode.element;
    n--;
  }
  //print(item);
  justPreviousNode.next = currNode.next;
  currNode.next = previousNode.next;
  previousNode.next = currNode;
}
*/
/*
function advance(item,n){
  var currNode = this.head;
  var num = 0;
  while (currNode.element!=item) {
    currNode = currNode.next;
    num++;
  }
  if (num>n+1) {
    var aheadStep = num-n-1;
    var previousNode = this.head;
    while (aheadStep>0) {
      previousNode = previousNode.next;
      aheadStep--;
    }
    var justPreviousNode = this.findPrevious(item);
    justPreviousNode.next = currNode.next;
    currNode.next = previousNode.next;
    previousNode.next = currNode;

  } else {
    print("you can not advance " + item + " ahead " + n +" places.");
  }
}
*/
function advance(node,n){
  var currNode = this.head;
  var num = 0;
  while (currNode.element!=node.element) {
    currNode = currNode.next;
    num++;
  }
  if (num>n+1) {
    var aheadStep = num-n-1;
    var previousNode = this.head;
    while (aheadStep>0) {
      previousNode = previousNode.next;
      aheadStep--;
    }
    var justPreviousNode = this.findPrevious(node.element);
    justPreviousNode.next = currNode.next;
    currNode.next = previousNode.next;
    previousNode.next = currNode;

  } else {
    print("you can not advance " + node.element + " ahead " + n +" places.");
  }
}

print("--------------------exe01-----------------------");
var newNode = cities.find("Liuji");
cities.advance(newNode,3);
cities.display();

var newNode = cities.find("Siyang");
cities.advance(newNode,2);
cities.display();
var newNode = cities.find("Xinyuan");
cities.advance(newNode,3);
cities.display();
var newNode = cities.find("Siyang");
cities.advance(newNode,3);
cities.display();

print("-------------------------------------------");




print("----------------------exe03---------------------");

//显示当前节点数据
function show(currNode){
  print(currNode.element);
}

var currNode = cities.find("Nanjing").next;
show(currNode);










print("-------------------------------------------");
