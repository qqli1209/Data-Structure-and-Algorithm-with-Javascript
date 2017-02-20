//二分查找
function binarySearch(arr,data){
  var left = 0;
  var right = arr.length - 1;
  var mid;
  while (left<=right) {
    mid = Math.floor((left+right)/2);
    //print("current mid: " + mid);
    if (arr[mid]<data) {
      left = mid + 1;
    } else if(arr[mid]>data){
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
/*
//test
var data = 47;
var num = 100;
var arr = new Array(num);
for (var i = 0; i < arr.length; i++) {
  arr[i] = i + 10;
}
print("array: " + arr);
var p = binarySearch(arr,data);
if (p>-1) {
  print("find " + data + " at " + p);
} else {
  print("not find " + data + " in array");
}
*/
