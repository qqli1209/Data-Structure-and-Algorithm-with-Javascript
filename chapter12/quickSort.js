//快排 o(nlog(n)), 10000num, 7ms
function quickSort(arr){
  if (arr.length<1) {
    return [];
  }
  var smaller = [];
  var larger = [];
  //var pivot = arr[0];
  var pivot = arr[Math.floor(arr.length/2)];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i]<pivot) {
      smaller.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }
  return quickSort(smaller).concat(pivot,quickSort(larger));
}

var arrNum = 100000;
var testNums = new Array(arrNum);

for (var i = 0; i < testNums.length; i++) {
  testNums[i] = Math.floor(Math.random()*(2*testNums.length+1));
}/*
for (var i = 0; i < testNums.length; i++) {
  testNums[i] = i;
}
/*
print("primary array:")
print(testNums);
print("bubble sort:");
print(quickSort(testNums));
*/

var start = new Date().getTime();
quickSort(testNums);
var end = new Date().getTime();
print("quick sort time: " + (end-start) + "ms");
