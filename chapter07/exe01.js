load("dictionary.js");
var phoneNumber = read("phoneNumber.txt").split("\n");
print("phone number array: \n" + phoneNumber);
var phoneDic = new Dictionary();
for (var i = 0; i < phoneNumber.length; i++) {
  var temp = phoneNumber[i].split(" ");
  phoneDic.add(temp[0],temp[1]);
}
//原始字典
print("\nphone Dic:");
phoneDic.showAll();
//查找sbb号码
print("\nsbb's phone number: " + phoneDic.find("sbb"));
//删除lxc
print("\nafter delete lxc:")
phoneDic.remove("lxc");
phoneDic.showAll();
print("\nafter add cy:")
//增加cy
phoneDic.add("cy","15896335289");
phoneDic.showAll();
//清空所有号码
print("\nclear the Dic:")
phoneDic.clear();
print("\ncount: " + phoneDic.count());
