
function mergeSort(arr,start,end){
  if (start==end) {
    return ;
  }
  if (end>start) {
    var mid = Math.floor((start+end)/2);
    //print("start = "+start+", mid = "+mid+", end = "+end);
    //左边有序
    mergeSort(arr,start,mid);//print(arr);

    //右边有序
    mergeSort(arr,mid+1,end);//print(arr);
    //合并
    mergeArray(arr,start,mid,end);
    //print(arr);
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


var arrNum = 100000;
var testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
/*
print("primary array:")
print(testNums);
print("merge sort:");
mergeSort(testNums,0,testNums.length-1);
print(testNums);
*/


start = new Date().getTime();
mergeSort(testNums,0,testNums.length-1);
print(testNums.slice(0,200));
//print(insertionSort(testNums));
end = new Date().getTime();
print("mergeSort time: " + (end-start) + "ms");
