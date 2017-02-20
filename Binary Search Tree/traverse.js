//中序遍历
function midFirst(root){
    var cur = root;
    if(cur!=null){
        midFirst(cur.left);
        console.log(cur.val);
        midFirst(cur.right);
    }
}

//前序遍历
function preFirst(root){
    var cur = root;
    if(cur!=null){
        console.log(cur.val);
        preFirst(cur.left);
        preFirst(cur.right);
    }
}

//后序遍历
function lastFirst(root){
    var cur = root;
    if(cur!=null){
        lastFirst(cur.left);
        lastFirst(cur.right);
        console.log(cur.val);
    }
}