function min(root){
    var cur = root;
    while(cur.left!=null){
        cur = cur.left;
    }
    return cur;
}

function deleteNode (root, key) {
    if(root==null){return null;}
    if(key>root.val){
        root.right = deleteNode(root.right,key);
    } else if(key<root.val){
        root.left = deleteNode(root.left,key);
    } else {// key==root.val
        if(root.left==null){
            return root.right;
        } else if(root.right==null){
            return root.left;
        } else {//两个子节点
            var  minNode = min(root.right);
            root.val = minNode.val;
            root.right = deleteNode(root.right,minNode.val);
        }
    }
    return root;
};