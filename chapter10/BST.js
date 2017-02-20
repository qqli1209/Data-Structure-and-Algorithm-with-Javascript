//节点
function Node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show(){
  return this.data;
}

//二叉查找树 Binary search tree
function BST(){
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder; //中序遍历
  this.preOrder = preOrder; //先序遍历
  this.postOrder = postOrder; //后序遍历
  this.getMin = getMin; //查找最小值
  this.getMax = getMax; //查找最大值
  this.find = find; //查找给定值
  this.remove = remove; //删除节点
}
//插入数据
function insert(data){
  var newNode = new Node(data,null,null);
  //空树，则设为根节点
  if (this.root==null) {
    this.root = newNode;
  }
  //否则，凭大小查找合适位置
  else {
    var currentNode = this.root;
    while(true){
      var parentNode = currentNode;
      if (data<currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode==null) {
          parentNode.left = newNode;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode==null) {
          parentNode.right = newNode;
          break;
        }
      }
    }
  }
}
//中序遍历，递归实现
function inOrder(node){
  if(node!=null){
    inOrder(node.left);
    print(node.data + " ");
    inOrder(node.right);
  }
}
//先序遍历
function preOrder(node){
  if (node!=null) {
    print(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}
//后序遍历
function postOrder(node){
  if (node!=null) {
    postOrder(node.left);
    postOrder(node.right);
    print(node.data + " ");
  }
}
//查找最小值
function getMin(){
  var node = this.root;
  while(node.left!=null){
    node = node.left;
  }
  return node.data;
}
//查找最大值
function getMax(){
  var node = this.root;
  while(node.right!=null){
    node = node.right;
  }
  return node.data;
}
//查找给定值
function find(data){
  var currentNode = this.root;
  while(currentNode!=null){
    if (data==currentNode.data) {
      return true;
    }
     else if (data>currentNode.data) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }
  return false;
}
//删除节点
function remove(data){
  root = removeNode(this.root, data);
}
function removeNode(node,data){
  if (node==null) {
    return null;
  }
  if (data>node.data) {
    node.right = removeNode(node.right,data);
    return node;
  } else if (data<node.data){
    node.left = removeNode(node.left,data);
    return node;
  } else {
    //叶子节点
    if (node.left==null && node.right==null) {
      return null;
    }
    //没有左子节点
    else if(node.left==null){
      return node.right;
    }
    //没有右子节点
    else if(node.right==null){
      return node.left;
    }
    //有两个子节点
    else {
      var leftest = node.right;
      while(leftest.left!=null){
        leftest = leftest.left;
      }
      node.data = leftest.data;
      node.right = removeNode(node.right,leftest.data);
      return node;
    }
  }
}
