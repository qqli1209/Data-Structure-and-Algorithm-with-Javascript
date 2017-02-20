//js自带排序函数
function compare(n1,n2){
  return n1-n2;
}
var arrNum = 100000;
var testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
/*
print("primary array:")
print(testNums);
print("bubble sort:");
print(quickSort(testNums));
*/
//10000num, 1ms
var start = new Date().getTime();
testNums.sort(compare);
var end = new Date().getTime();
print("sort time: " + (end-start) + "ms");
