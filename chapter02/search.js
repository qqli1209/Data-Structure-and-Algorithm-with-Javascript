var names = ["lqq","dcq","lqm","sbb","cy","dcq","zwb"];
print("please enter a name to search for:");
var name = readline();
var position = names.indexOf(name); //第一个匹配的位置
if(position > -1){
  print("first match position: found " + name + " at position " + position);
  print("last  match position: found " + name + " at position " + names.lastIndexOf(name));
} else {
  print("sorry," + name + " is not found.")
}
