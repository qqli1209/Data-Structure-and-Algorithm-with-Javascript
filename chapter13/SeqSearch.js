//顺序查找
function seqSearch(arr,data){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==data) {
      return i;
    }
  }
  return -1;
}

var a = [1,2,3,4,5,8,9,1000,-100];
print(seqSearch(a,1)); //0
print(seqSearch(a,7)); //-1

//查找最小值
function findMin(arr){
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i]<result) {
      result = arr[i];
    }
  }
  return result;
}
print("min of a: " + findMin(a));


//查找最大值
function findMax(arr){
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i]>result){
      result = arr[i];
    }
  }
  return result;
}
print("max of a: " + findMax(a));

//包含自组织方式的seqSearch
function seqSearch(arr,data){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==data) {
      if (i>0) {
        swap(arr,i,i-1);
      }
      return i;
    }
  }
  return -1;
}

//交换位置
function swap(arr,i,j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
