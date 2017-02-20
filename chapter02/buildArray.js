var numbers = []; //创建空数组
print(numbers.length); //0

var numbers = [1,2,3,4,5]; //创建数组并声明数组变量,效率最高
print(numbers.length); //5

var numbers = new Array(); //创建空数组
print(numbers.length); //0

var numbers = new Array(1,2,3,4,5);
print(numbers); //1,2,3,4,5

var numbers = new Array(10);
print(numbers.length); //数组长度为10

var objects = [1,2,"lqq","sbb",true,null]; //数组可以存储不同类型的数据
print(objects);
print(Array.isArray(objects)); //判断是否为数组，true
