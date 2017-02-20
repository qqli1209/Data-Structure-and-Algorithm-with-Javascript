function dynFib(n){
    var val = [];
    val[0] = 0;
    val[1] = 1;
    val[2] = 1;
    for(var i=3; i<=n;i++){
        val[i] = val[i-1] + val[i-2];
    }
    return val[n];
}

for(var i=0;i<=20;i++){
    console.log("Fib("+i+") = " + dynFib(i));
}