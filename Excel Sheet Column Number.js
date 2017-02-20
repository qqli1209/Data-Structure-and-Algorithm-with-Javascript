

//原型链 prototype

function obj(name){
    if(name){
        this.name = name;
    }
    return this;
}
obj.prototype.name = "name2";
var a = obj("name1");
var b = new obj;

console.log(a.name);
console.log(b.name);



//解决 0.1+0.2=0.30000000000000004 问题
function sum(arr){
    var res = 0;
    var baseNum = 0;
    var baseNum1;
    for(let i=0; i<arr.length; i++){
        if(!isNaN(parseFloat(arr[i]))){
            //res += parseFloat(arr[i]);
            try {
                baseNum1 = arr[i].toString().split(".")[1].length;
            } catch (e) {
                baseNum1 = 0;
            }
            baseNum = Math.pow(10, Math.max(baseNum1, baseNum));
        }
    }
    for(let i=0; i<arr.length; i++){
        if(!isNaN(parseFloat(arr[i]))){
            //res += parseFloat(arr[i]);
            res += parseFloat(arr[i])*baseNum;
        }
    }
    res /= baseNum;
    console.log(res);
    return res;
}


sum([0.1, 0.2]);
function numAdd(num1/*:String*/, num2/*:String*/) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};






var test = (function(a) {
    this.a = a;
    return function(b) {
        return this.a + b;
    }
} (function(a, b) {
    return a;
}(1, 2)));

console.log(test(8));


