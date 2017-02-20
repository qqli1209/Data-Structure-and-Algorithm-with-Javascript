var decodeString = function(s) {
    var stack = [];
    var num = 0; //number of "[" in stack
    var result = "";
    for(let i=0 ;i<s.length; i++){
        //数字
        if(!isNaN(parseInt(s.charAt(i)))){
            stack.push(s.charAt(i));
            //console.log(stack);
        }
        //字母
        else if(s.charAt(i)!="[" && s.charAt(i)!="]"){
            if(num==0){
                result += s.charAt(i);
            } else {
                stack.push(s.charAt(i));
                //console.log(stack);
            }

        }
        //"["入栈
        else if(s.charAt(i)=="["){
            num++;
            stack.push("[");
            //console.log(stack);
        }
        // "]"
        else {
            if(num==1){
                var repeatNum = "";
                var k = 0;
                while(!isNaN(parseInt(stack[k]))){
                    repeatNum += stack[k];
                    k++;
                }
                result += stack.slice(k+1).join("").repeat(parseInt(repeatNum));
                stack = [];
                num = 0;
                //console.log(stack);
            } else {
                // "]"
                num--;
                var temp = stack.lastIndexOf("[");
                var k = temp-1;
                var repeatNum = "";
                while(!isNaN(parseInt(stack[k]))){
                    repeatNum = stack[k] + repeatNum;
                    k--;
                }
                var tempStr = stack.slice(temp+1).join("").repeat(parseInt(repeatNum));
                stack.splice(temp-repeatNum.length);
                for(let j=0; j<tempStr.length; j++){
                    stack.push(tempStr.charAt(j));
                }
                //console.log(stack);
            }
        }
    }
    console.log(result);
    return result;
};

//test
//decodeString("3[a]2[bc]");
//decodeString("3[a2[c]]");
//decodeString("2[abc]3[cd]ef");
//decodeString("100[leetcode]");
//console.log(!isNaN("["));
//console.log(Array.isArray(2));

var a = 5;
console.log((a<<1)&1);

var a = [1,2,3,4,5];
console.log(a.reverse());



function merge(arr,p,q,r){
    var L = new Array(q-p+2);
    for(let i=0; i<=q-p; i++){
        L[i] = arr[i+p];
    }
    L[L.length-1] = Infinity;

    var R = new Array(r-q+1);
    for(let i=0; i<=r-q-1; i++){
        R[i] = arr[i+q+1];
    }
    R[R.length-1] = Infinity;

    var i = 0, j = 0;
    for(let k=p; k<=r; k++){
        if(L[i]<R[j]){
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
    }
}


function mergeSort(arr,p,r){
    if(p<r){
        var q = Math.floor((p+r)/2);
        mergeSort(arr,p,q);
        mergeSort(arr,q+1,r);
        merge(arr,p,q,r);
    }
}

var t = [1,3,4,2,6,8,4];
mergeSort(t,0,t.length-1);
console.log(t);




var s = [1];
s.splice(0,0,2);
console.log(s.splice(0,0,2));




