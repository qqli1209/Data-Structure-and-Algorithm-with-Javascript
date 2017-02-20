//插入节点
function insert(root,k){
    var newNode = new TreeNode(k);
    if(root==null){
        root = newNode;
    } else {
        var parent;
        var cur = root;
        while(true){
            parent = cur;
            if(k<cur.val){
                cur = cur.left;
                if(cur==null){
                    parent.left = newNode;
                    break;
                }
            } else {
                cur = cur.right;
                if(cur==null){
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}









