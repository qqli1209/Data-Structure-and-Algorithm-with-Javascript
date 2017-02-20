var arrNum = 10000;
var testNums = new Array(arrNum);
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}
//希尔排序，首先比较间隔较远的元素，而非相邻元素，使得离正确位置很远的元素尽快回到正确位置
//定义一个间隔序列
//10000num, 8ms
var tempgaps = [5,3,1];
//10000num, 7ms
/*
function shellSort(arr,gaps){
  var temp,inner;
  for (var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for (var outer = gap; outer < arr.length; outer++) {
      temp = arr[outer];
      inner = outer;
      while (inner>=gap && arr[inner-gap]>temp) {
        arr[inner] = arr[inner-gap];
        inner -= gap;
      }
      arr[inner] = temp;
    }
  }
  return arr;
}
*/
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

//print("primary array:")
//print(testNums);
//print("shell sort:");
//print(shellSort(testNums,tempgaps));


start = new Date().getTime();
shellSort(testNums,tempgaps);
//print(insertionSort(testNums));
end = new Date().getTime();
print("shell sort time: " + (end-start) + "ms");
