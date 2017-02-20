//快排,分治模式，每次将小于pivot的值放在左侧，大的放在右侧
function quickSort(A,p,r){
  if (p<r) {
      q = partition(A,p,r);
      quickSort(A,p,q-1);
      quickSort(A,q+1,r);
  }
}
//对数组原址重排
function partition(A,p,r){
  var pivot = A[Math.floor((p+r)/2)];
  var i = p + 1;
  var j = r;
  while (i<j) {
    if (A[i]<pivot) {
      i++;
    } else {
      exchange(A,i,j);
      j--;
    }
  }
  if (A[i]<pivot) {
    exchange(A,p,i);
    return i;
  } else {
    exchange(A,p,i-1);
    return i-1;
  }
}
//交换数组元素
function exchange(A,i,j){
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}



var arrNum = 100000;
var testNums = new Array(arrNum);

//倒序
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = testNums.length-i;
}
//有序
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = i;
}
//无序
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
/*
print("primary array:")
print(testNums);
print("quick sort:");
quickSort(testNums,0,testNums.length-1);
print(testNums);
*/

start = new Date().getTime();
quickSort(testNums,0,testNums.length-1);
print(testNums.slice(0,200));
//print(insertionSort(testNums));
end = new Date().getTime();
print("quickSort time: " + (end-start) + "ms");
