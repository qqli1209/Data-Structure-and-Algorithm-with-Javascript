var nums = [1,2,3,4,5,100,200,];
print(nums);
print(nums.reverse()); //倒序 ，200,100，5,4,3,2,1

var names = ["Bernad","Ford","Arnode","Elsie","Lqq"];
print(names.sort()); //字典排序，Arnode,Bernad,Elsie,Ford,Lqq

print(nums.sort()); //字典排序，1,100,2,200,3,4,5

//按数字大小排序，传入一个排序函数
function compare(num1,num2){
  return num1-num2;
}
print(nums.sort(compare)); //1,2,3,4,5,100,200
