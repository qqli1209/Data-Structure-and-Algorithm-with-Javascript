//有返回值
function factorial(num){
  var value = 1;
  while(num>0){
    value *= num;
    num--;
  }
  return value;
}

print(factorial(3));
print(factorial(5));
//无返回值
function curve(arr,num){
  for(var i=0; i<arr.length; i++){
    arr[i] += num;
  }
}
var number = [1,2,3,4,5];
print(number);
curve(number,2);
print(number);
