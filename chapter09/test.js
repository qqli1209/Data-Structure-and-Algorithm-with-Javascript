load("Set.js");
var names = new Set();
names.add("lqq");
names.add("dcq");
names.add("bff");
names.add("lxc");
names.add("sbb");
names.show();
if(names.add("lqq")){
  print("add lqq");
} else {
  print("lqq has been in the Set");
}
names.show();
names.remove("lxc");
print("delete lxc:");
names.show();
if(names.add("cy")){
  print("add cy:");
} else {
  print("cy has been in the Set");
}
names.show();

//子集
var num1 = new Set();
num1.add(1);
num1.add(2);
num1.add(3);
num1.add(4);
num1.add(5);
var num2 = new Set();
num2.add(1);
num2.add(2);
num2.add(3);
num2.add(4);
num2.add(5);
num2.add(6);
var num3 = new Set();
num3.add(1);
num3.add(3);
num3.add(5);
num3.add(6);
print(num1.subset(num2)); //true
print(num1.subset(num3)); //false
//补集
num2.difference(num1).show(); //6
//交集
num1.intersect(num3).show(); //1,3,5
print("------------------------exe03---------------------");
var num4 = new Set();
num4.add(1);
num4.add(3);
num4.add(5);
num4.add(7);
num4.add(9);
print(num4.higher(6));
num4.show();
print(num4.higher(5));
num4.show();
print(num4.higher(10));
num4.show();
print("------------------------exe04---------------------");
print(num4.lower(6));
num4.show();
print(num4.lower(3));
num4.show();
print(num4.lower(1));
num4.show();
