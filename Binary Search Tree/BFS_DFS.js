//广度优先搜索迭代实现方法，队列
function BFS(root) {
    var res = [];
    if(root==null){return ;}
    var Q = [];
    Q.push(root);
    while(Q.length>0){
        var node = Q.shift();
        res.push(node.val);
        if(node.left!=null){
            Q.push(node.left);
        }
        if(node.right!=null){
            Q.push(node.right);
        }
    }
    console.log(res);
    return res;
}

//深度优先搜索递归实现方法
function DFS_Recursive(root){
    if(root==null){return ;}
    console.log(root.val);
    if(root.left!=null){
        DFS_Recursive(root.left);
    }
    if(root.right!=null){
        DFS_Recursive(root.right);
    }

}

//深度优先搜索迭代实现方法，栈
function DFS_Iterative(root){
    if(root==null){return ;}
    var S = [];
    S.push(root);
    while(S.length>0){
        var node = S.pop();
        console.log(node.val);
        if(node.right!=null){
            S.push(node.right);
        }
        if(node.left!=null){
            S.push(node.left);
        }
    }
}
