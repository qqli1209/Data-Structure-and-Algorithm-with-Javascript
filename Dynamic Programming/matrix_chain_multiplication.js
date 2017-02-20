function matrix_chain_order(A){
    var n = A.length;
    //初始化 m,s
    var m = [];
    var s = [];
    for(var i=0; i<n; i++){
        m[i] = new Array(n);
        m[i][i] = 0;
        s[i] = new Array(n);
    }
    var start;
    var end;
    var temp;
    var min_num;
    for(var l=1; l<n; l++){
        for(var j=0; j<n-l; j++){
            start = j;
            end = j + l;
            if(l==1){
                m[start][end] = A[start][0]*A[start][1]*A[end,1];
                s[start][end] = start;
            } else {
                min_num = Infinity;
                for(var k=start; k<end; k++){
                    temp = A[start][0]*A[k][1]*A[end][1] +
                        m[start][k] + m[k+1][end];
                    if(temp<min_num){
                        min_num = temp;
                        s[start][end] = k;
                    }
                }
                m[start][end] = min_num;
            }
        }
    }
    return m;
}


var m = matrix_chain_order([[30, 35],[35,15],[15,5],[5,10],[10,20],[20,25]]);
console.log(m);




















/*
function matrix_multiplication(A,B){
    var result = [];
    for(var n=0; n<A.length; n++){
        result[n] = [];
    }
    if(A[0].length != B.length){
        console.log("matrix mismatch!");
        return ;
    }
    var temp;
    for(var i=0; i<A.length; i++){
        for(var j=0; j<B[0].length; j++){
            temp = 0;
            for(var k=0; k<A[0].length; k++){
                temp += A[i][k]*B[k][j];
            }
            result[i][j] = temp;
        }
    }
    return result;
}
//test matrix_multiplication
var A = [[1,2],[3,4]];
var B = [[3,2],[1,6]];
var C = matrix_multiplication(A,B);
console.log(C);
*/