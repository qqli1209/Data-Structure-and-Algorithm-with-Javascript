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

print("-------------------------exe04,界面输入----------------------");

var grades = new LList();
print("enter grade (esc to stop input):");
var grade = readline();
while(grade != "esc") {
  grades.insert(grade,grades.head.element);
  print("enter grade (esc to stop input):");
  grade = readline();
}

print("grades: ");
grades.display();






print("---------------------------------------------------");
