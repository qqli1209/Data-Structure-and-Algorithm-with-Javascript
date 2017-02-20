load("HashTable8.2.4.js");
var numbers = new HashTable();
numbers.buildChain();
print("enter three names and numbers:");
var name,number;
for (var i = 0; i < 3; i++) {
  print("name:");
  name = readline();
  print("number:");
  number = readline();
  numbers.put(name,number);
}

name = "";
print("enter a name to query:(enter quit to stop):");
name = readline();
while(name != "quit"){
  print(name + ": " + numbers.get(name));
  print("enter a name to query:(enter quit to stop):");
  name = readline();
}
