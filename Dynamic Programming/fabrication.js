function fastest_way(a,t,e,x,n){
    var f = [[],[]];
    var l = [[],[]];
    var l_star;
    f[0][0] = e[0] + a[0][0];
    f[1][0] = e[1] + a[1][0];
    for(var j=1; j<n; ++j){
        //计算f1[j]
        if(f[0][j-1]+a[0][j]<f[1][j-1]+a[0][j]+t[1][j-1]){
            f[0][j] = f[0][j-1]+a[0][j];
            l[0][j] = 1;
        } else {
            f[0][j] = f[1][j-1]+a[0][j]+t[1][j-1];
            l[0][j] = 2;
        }
        //计算f2[j]
        if(f[1][j-1]+a[1][j]<f[0][j-1]+a[1][j]+t[0][j-1]){
            f[1][j] = f[1][j-1]+a[1][j];
            l[1][j] = 2;
        } else {
            f[1][j] = f[0][j-1]+a[1][j]+t[0][j-1];
            l[1][j] = 1;
        }
    }
    //选择最短路径
    if(f[0][n-1]+x[0]<f[1][n-1]+x[1]){
        f = f[0][n-1]+x[0];
        l_star = 0;
    } else {
        f = f[1][n-1]+x[1];
        l_star = 1;
    }
    console.log("shorest time is " + f);
    console.log("line " + (l_star+1) + ", station " + n);
    for(var j=n-1; j>=1; j--){
        l_star = l[l_star][j]-1;
        console.log("line " + (l_star+1) + ", station " + j);
    }
}

//test
var e = [2, 4];
var x = [3, 2];
var a = [[7, 9, 3, 4, 8, 4],
    [8, 5, 6, 4, 5, 7]];
var t = [[2, 3, 1, 3, 4],
    [2, 1, 2, 2, 1]];
var n = 6;
fastest_way(a,t,e,x,n);
/*
shorest time is 38
line 1, station 6
line 2, station 5
line 2, station 4
line 1, station 3
line 2, station 2
line 1, station 1
*/

