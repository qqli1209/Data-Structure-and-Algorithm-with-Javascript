var numbers = [];
for(var i=0; i<10; i++){
  numbers[i] = i+1;
}
print(numbers);

var sum = 0;
for(var i=0; i<numbers.length; i++){
  sum += numbers[i];
}
print(sum);
