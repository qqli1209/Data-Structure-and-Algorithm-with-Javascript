//数组开头/末尾添加元素
var numbers = [2,3,4,5];
print(numbers);
numbers.push(6,7); //数组末尾添加元素
print(numbers);
numbers.unshift(1); //数组开头添加元素
print(numbers);
numbers.unshift(-2,-1,0);
print(numbers);

//数组开头/末尾删除元素
var last = numbers.pop();
print(last);
print(numbers);
var first = numbers.shift();
print(numbers);
print(first);

//任意位置添加/删除元素
var nums = [1,2,3,7,8,9,1000,2000,3000];
print(nums);
nums.splice(3,0,4,5,6); //起始索引为3，删除0个元素，添加4,5,6
print(nums);
nums.splice(9,3); //起始索引为9，删除3个元素
print(nums);
var nums1 = [11,22,33];
nums.splice(3,0,nums1); //起始索引为3，删除0个元素，添加nums1
print(nums);
