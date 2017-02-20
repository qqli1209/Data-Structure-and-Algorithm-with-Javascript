//不生成新数组的迭代器方法，forEach(),every(),some(),reduce(),reduceRight()
function square(num){
  print(num, num*num);
}
var numbers = [1,2,3,4,5];
numbers.forEach(square); //forEach,数组中的每个元素执行square
print(numbers);

var numbers = [2,4,6,8];
function isEven(num){
  return num%2==0;
}
print(numbers.every(isEven)); //every,数组中每个元素都返回true，则返回true，否则返回false

var numbers = [1,2,3,4,5];
print(numbers.some(isEven)); //every,数组中有一个元素都返回true，则返回true，否则返回false

function add(num1,num2){
  return num1+num2;
}
print(numbers.reduce(add)); //reduce,从第一个累加开始，不断对累加和数组后续元素调用add函数，直到数组最后一个元素
var sentence = ["name ","is ","Dloes "];
print(sentence.reduce(add));

print(numbers.reduceRight(add)); //从右到左执行
print(sentence.reduceRight(add));

//生成新数组的迭代器方法，map(),filter()
print("-----------------------------------");
var numbers = [1,2,3,4,5];
function sq(num){
  return num*num;
}
numbers1 = numbers.map(sq); //map(),得到新数组，新数组的值是对每个原来数组元素应用sq函数
print(numbers1);
function first(word){
  return word[0];
}
var names = ["Delos","Ford","Elsie","William"];
print(names.map(first).join("")); //join(),数组元素放入一个字符串，并用指定的分隔符分隔

function isOdd(num){
  return num%2 == 1;
}
nums = [];
for(var i=0; i<20; i++){
  nums[i]=i+1;
}
print("Even numbers:" + nums.filter(isEven)); //生成一个新数组，包含执行isEven后返回值是true的元素
print("Odd numbers:" + nums.filter(isOdd));


function passing(num){
  return num >= 60;
}
var grades = [];
for(var i=0; i<20; i++){
  grades[i] = Math.floor(Math.random()*101);
}
print("all grades: " + grades);
print("passing grades: " + grades.filter(passing));
//print(Math.random());

function afterc(word){
  if(word.indexOf("cie") > -1){
    return true;
  } else {
    return false;
  }
}
var words = ["Elsie","Elcie","pycie","lilycie","Ford"];
print(words.filter(afterc));
