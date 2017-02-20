function Node(element){
  this.element = element;
  this.next = null;
}
//循环链表
function LList(){
  this.head = new Node("head");
  this.head.next = this.head;
  this.insert = insert;
  this.remove = remove;
  this.find = find;
  this.display = display;
}
//查找
function find(item){
  var currNode = this.head;
  while(currNode.element!=item){
    currNode = currNode.next;
  }
  return currNode;
}
//item后面插入newElement
function insert(newElement,item){
  var currNode = this.find(item);
  var newNode = new Node(newElement);
  newNode.next = currNode.next;
  currNode.next = newNode;
}
//显示单向循环链表元素
function display(){
  var currNode = this.head.next;
  var str = "";
  print("display:");
  while(currNode.element!="head"){
    str += currNode.element + " ";
    currNode = currNode.next;
  }
  print(str);
}
//按照约瑟夫问题要求删除,首先从一个人开始报数，并杀掉第3个人。下一个人再从1开始报数
function remove(){
  var str = "";
  var currNode = this.head.next;
  //每隔2个人out一个
  while(currNode.next.next.next.element!=currNode.element){
    //如果当前节点是头结点，则跳到下一个
    if (currNode.element=="head") {
      currNode = currNode.next;
    }
    var temp = currNode.next.next;
    //如果数数时越过了头结点，则再往下数一个
    if (currNode.next.element=="head" || currNode.next.next.element=="head") {
      temp = temp.next;
      str += temp.element + " ";
      currNode.next.next.next = temp.next;
      currNode = temp.next;
      temp.next = null;
    }
    //不越过头结点，通常情况 
    else {
      str += temp.element + " ";
      currNode.next.next = temp.next;
      currNode = temp.next;
      temp.next = null;
    }
  }
  return str;
}


//test
print("-----------------------------exe06-----------------------");
var Clist = new LList();
Clist.insert((1).toString(),"head");
for (var i = 1; i < 41; i++) {
  Clist.insert((i+1).toString(),i.toString());
}
Clist.display();


Clist.remove();
Clist.display();








print("---------------------------------------------");
