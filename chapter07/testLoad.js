//相当于addpath或include
load("dictionary.js");
//test
var grade = new Dictionary();
grade.add("a","lqq");
grade.add("c","dcq");
grade.add("b","sbb");
grade.add("f","lxc");
grade.add("e","bff");
print("element number: " + grade.count());
grade.showAll();
print("a: " + grade.find("a"));
grade.remove("f");
print("element number: " + grade.count());
grade.showAll();
grade.clear();
print("element number: " + grade.count());
grade.showAll();
