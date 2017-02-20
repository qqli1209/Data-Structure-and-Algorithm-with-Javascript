load("BST.js");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
//中序遍历
print("inorder traversal:");
nums.inOrder(nums.root);
//先序遍历
print("preorder traversal:");
nums.preOrder(nums.root);
//后序遍历
print("postorder traversal:");
nums.postOrder(nums.root);
//查找最小值
print("min num: " + nums.getMin());
//查找最大值
print("max num: " + nums.getMax());
//查找给定值
var num = 3;
print("find " + num + ": " + nums.find(num));
num = 33;
print("find " + num + ": " + nums.find(num));

print("------------------------------------------");
//删除节点
num = 45;
nums.remove(num);
print("after remove 45:");
print("find " + num + ": " + nums.find(num));
print("inorder traversal:");
nums.inOrder(nums.root);
