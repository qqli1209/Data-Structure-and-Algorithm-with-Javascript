//递归查找
function search(root,k){
    var cur = root;
    if(cur==null){
        return null;
    }
    if(k==cur.val){
        return cur;
    } else if(k<cur.val){
        return search(cur.left,k);
    } else {
        return search(cur.right,k);
    }
}


//while循环查找
function searchLoop(root,k){
    var cur = root;
    while(cur!=null && k!=cur.val){
        if(k>cur.val){
            cur = cur.right;
        } else {
            cur = cur.left;
        }
    }
    return cur;
}


//查找最大值
function max(root){
    var cur = root;
    while(cur.right!=null){
        cur = cur.right;
    }
    return cur;
}

//查找最小值
function min(root){
    var cur = root;
    while(cur.left!=null){
        cur = cur.left;
    }
    return cur;
}