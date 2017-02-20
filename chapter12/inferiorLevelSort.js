/*
load("CArray.js");
var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
print("primary array:")
print(nums.toString());
*/
var arrNum = 100000;
var testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
//print("primary array:")
//print(testNums);
//冒泡排序,最大的数慢慢浮到最右边, o(n^2)
//10000num, 280ms
function bubbleSort(arr){
  var temp;
  for (var i = 0; i < arr.length; i++) {
    if (i%100==0) {
      print(i);
    }
    for (var j = 0; j < arr.length-i; j++) {
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    //print("now: " + arr);
  }
  return arr;
}
print("bubble sort:");
var start = new Date().getTime();
bubbleSort(testNums)
//print(bubbleSort(testNums));
var end = new Date().getTime();
print("bubble sort time: " + (end-start) + "ms");
print("-------------------------------------------------");

//选择排序,选择最小的，放最左边, o(n^2)
//10000num,25ms
function selectionSort(arr){
  var temp;
  for (var i = 0; i < arr.length-1; i++) {
    var minEle = arr[i];
    var minElePlace = i;
    for (var j = i+1; j < arr.length; j++) {
      if (minEle>arr[j]) {
        minEle = arr[j];
        minElePlace = j;
      }
    }
    temp = arr[i];
    arr[i] = minEle;
    arr[minElePlace] = temp;
  }
  return arr;
}
testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
//print("primary array:")
//print(testNums);
start= new Date().getTime();
//print("selection sort:");
selectionSort(testNums)
end = new Date().getTime();
print("selection sort time: " + (end-start) + "ms");
//print(selectionSort(testNums));
print("--------------------------------------------------");




//插入排序， 找到合适的地方插入下一个元素, o(n^2)
//10000num, 35ms
function insertionSort(arr){
  var temp,inner;
  for (var outer = 1; outer < arr.length-1; outer++) {
    temp = arr[outer];
    inner = outer;
    while (inner>=1 && arr[inner-1]>temp) {
      arr[inner] = arr[inner-1];
      inner--;
    }
    arr[inner] = temp;
  }
  return arr;
}
testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
//print("primary array:")
//print(testNums);
print("insertion sort:");
start = new Date().getTime();
insertionSort(testNums);
//print(insertionSort(testNums));
end = new Date().getTime();
print("insertion sort time: " + (end-start) + "ms");
print("--------------------------------------------------");
