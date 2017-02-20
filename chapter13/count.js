load("binarySearch.js");
//计算重复次数
function count(arr,data){
  var result = 0;
  var position = binarySearch(arr,data);
  if (position>-1) {
    result++;
    for (var i=position-1; i<-1; i--) {
      if (arr[i]==data) {
        result++;
      } else {
        break;
      }
    }
    for (var i = position; i < arr.length; i++) {
      if (arr[i]==data) {
        result++;
      } else {
        break;
      }
    }
  }
  return result;
}


function compare(n1,n2){
  return n1-n2;
}

//test
var num = 100;
var arr = new Array(num);
for (var i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random()*(arr.length/2))
}
arr.sort(compare);
print("array: " + arr);

var c;
print("enter a num:(quit to exit)");
var data = readline();
while(data!="quit"){
  c = count(arr,data);
  print("found " + data + " " + c + " times");
  print("enter a num:(quit to exit)");
  data = readline();
}
