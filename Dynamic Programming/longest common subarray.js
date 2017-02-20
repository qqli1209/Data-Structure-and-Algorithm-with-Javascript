//最长公共子序列
function LCS(X,Y){
    var m = X.length;
    var n = Y.length;
    var c = [];
    var b = [];
    //初始化c[i][j]为 m*n,保存X,Y的一个LCS的长度,第一行第一列为0
    for(let i=0; i<=m; i++){
        b[i] = new Array(n+1);
        c[i] = new Array(n+1);
        c[i][0] = 0;
    }
    c[0].fill(0);
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(X[i-1]==Y[j-1]){
                c[i][j] = c[i-1][j-1] + 1;
                b[i][j] = "left_top";
            } else if(c[i-1][j]>=c[i][j-1]){
                c[i][j] = c[i-1][j];
                b[i][j] = "left";
            } else {
                c[i][j] = c[i][j-1];
                b[i][j] = "top";
            }
        }
    }
    var result = [c,b];
    return result;
}
var X = ["A","B","C","B","D","A","B","E","R"];
var Y = ["B","D","C","A","B","A","E","A"];
var result = LCS(X,Y);
var c = result[0];
var b = result[1];
console.log("c = ",c);
console.log("b = ",b);

//打印出子串的函数
function print_LCS(b,X,i,j){
    if(i==0 || j==0){return ;}
    if(b[i][j] == "left_top"){
        print_LCS(b,X,i-1,j-1);
        console.log(X[i-1]);
    } else if(b[i][j] == "left"){
        print_LCS(b,X,i-1,j);
    } else {
        print_LCS(b,X,i,j-1);
    }
}

print_LCS(b,X,9,8);
console.log("");
print_LCS(b,X,8,7);
console.log("");
print_LCS(b,X,7,6);

var a = [1,2,3,11]
a.shift();
console.log("shift: ",a);
console.log(a[0]);
function compare(n1,n2){
    return n2-n1;
}
console.log(a.sort(compare));
var b = new Map();
b.set("h",2);
console.log(b.get("h"));

var a = ["a","s","d","f"];
a.splice(2);
console.log(a);
