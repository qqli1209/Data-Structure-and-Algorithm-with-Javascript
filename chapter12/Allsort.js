//冒泡排序,最大的数慢慢浮到最右边, o(n^2)
//10000num, 280ms
function bubbleSort(arr){
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-i; j++) {
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}



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




//希尔排序，动态计算间隔序列, 10000num，1ms
function shellSort(arr){
  var N = arr.length;
  var h = 1;
  while(h<N/3){
    h = 3*h + 1;
  }
  var temp,inner;
  while(h>=1) {
    var gap = h;
    for (var outer = gap; outer < arr.length; outer++) {
      temp = arr[outer];
      inner = outer;
      while (inner>=gap && arr[inner-gap]>temp) {
        arr[inner] = arr[inner-gap];
        inner -= gap;
      }
      arr[inner] = temp;
    }
    h = (h-1)/3;
  }
  return arr;
}




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
  var pivot = A[p];
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



//归并排序, 10000num, 6ms
function mergeSort(arr,start,end){
  if (start==end) {
    return ;
  }
  if (end>start) {
    var mid = Math.floor((start+end)/2);
    //左边有序
    mergeSort(arr,start,mid);//print(arr);
    //右边有序
    mergeSort(arr,mid+1,end);//print(arr);
    //合并
    mergeArray(arr,start,mid,end);
  }
}
//将两个排好序的数组合并起来
function mergeArray(arr,start,mid,end){
  var result = [];
  var startRight = mid + 1;
  var k = 0;
  while (start<=mid && startRight<=end) {
    if (arr[start]<arr[startRight]) {
      result[k++] = arr[start++];
    } else {
      result[k++] = arr[startRight++];
    }
  }

  while (start<=mid) {
    result[k++] = arr[start++];
  }

  while (startRight<=end) {
    result[k++] = arr[startRight++];
  }

  while (k--) {
    arr[end--] = result[k];
  }
}




//js自带排序函数
function compare(n1,n2){
  return n1-n2;
}


print("-------------------------test-----------------------");
var arrNum = 100000;
var Nums = new Array(arrNum);
//无序
/*
for (var i = 0; i < Nums.length; i++) {
  Nums[i] = Math.floor(Math.random()*(2*Nums.length+1));
}*/
//有序
/*
for (var i = 0; i < Nums.length; i++) {
  Nums[i] = i;
}*/
//倒序

for (var i = 0; i < Nums.length; i++) {
  Nums[i] = Nums.length-i;
}



var testNums = [];
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
print(testNums.slice(1,100));
start = new Date().getTime();
testNums = bubbleSort(testNums);
end = new Date().getTime();
print("bubbleSort time: " + (end-start) + "ms");


print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
testNums = selectionSort(testNums);
end = new Date().getTime();
print("selectionSort time: " + (end-start) + "ms");


print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
testNums = insertionSort(testNums);
end = new Date().getTime();
print("insertionSort time: " + (end-start) + "ms");


print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
testNums = shellSort(testNums);
end = new Date().getTime();
print("shellSort time: " + (end-start) + "ms");



print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
testNums = quickSort(testNums);
end = new Date().getTime();
print("quickSort time: " + (end-start) + "ms");




print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
mergeSort(testNums);
end = new Date().getTime();
print("mergeSort time: " + (end-start) + "ms");



print("--------------------------------------------------");
for (var i = 0; i < Nums.length; i++) {
  testNums[i] = Nums[i];
}
start = new Date().getTime();
testNums.sort(compare);
end = new Date().getTime();
print("js sort time: " + (end-start) + "ms");
