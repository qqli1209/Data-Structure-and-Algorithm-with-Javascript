var arr1 = ["Jone","Smith","Joe","Elsie","Delos","Arnod","Ford"];
var arr2 = ["lqq","dcq","sbb"];
print("array1 :" + arr1);
print("array2 :" + arr2);
//合并数组
var arr3 = arr1.concat(arr2);
print("array3=array1+array2 :" + arr3);
var arr4 = arr2.concat(arr1);
print("array4=array2+array1 :" + arr4);
//截取数组
var arr5 = arr1.splice(3,3);
print("array5(array1第3个起，3个) :" + arr5);
print("array1(剩下的array1) :" + arr1);
