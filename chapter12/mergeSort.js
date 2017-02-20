//归并排序, 10000num, 6ms
function mergeSort(arr){
  if (arr.length<2) {
    return ;
  }
  var Num = arr.length;
  var startLeft = 0;
  var mid = Math.floor((Num-1)/2);
  var startRight = mid + 1;
  var stopRight = Num-1;
  //print(startLeft,stopLeft,startRight,stopRight);
  var leftArr = arr.slice(startLeft,startRight);
  var rightArr = arr.slice(startRight);
  //左边有序
  mergeSort(leftArr);
  //右边有序
  mergeSort(rightArr);
  for (var i = 0; i < leftArr.length; i++) {
    arr[i] = leftArr[i];
  }
  for (var j = 0; j < rightArr.length; j++) {
    arr[i+j] = rightArr[j];
  }
  //arr = leftArr.concat(rightArr); //arr指向的内容改变了，原始的数组没有了
  mergeArray(arr,startLeft,mid,stopRight);
}
//将两个有序数组arr[startLeft~stopLeft], arr[startRight,stopRight]合并
function mergeArray(arr,startLeft,mid,stopRight){
  var startRight = mid + 1;
  var result = [];
  var k = 0;
  while(startLeft<=mid && startRight<=stopRight){
    if (arr[startLeft]<arr[startRight]) {
      result[k++] = arr[startLeft++];
    } else {
      result[k++] = arr[startRight++];
    }
  }

  while (startLeft<=mid) {
    result[k++] = arr[startLeft++];
  }

  while (startRight<=stopRight) {
    result[k++] = arr[startRight++];
  }

  while (k--) {
    arr[k] = result[k];
  }
  //return arr;
}


var arrNum = 10000;
var testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
/*
print("primary array:")
print(testNums);
print("merge sort:");
mergeSort(testNums);
print(testNums);
*/

start = new Date().getTime();
mergeSort(testNums);
print(testNums.slice(0,200));
//print(insertionSort(testNums));
end = new Date().getTime();
print("shell sort time: " + (end-start) + "ms");
