load("HashTable.js");
//test simpleHash
var someName = ["lqq","sbb","cy","zwb","dcq","abl","bff"];
var nameHashTable = new HashTable();
for (var i = 0; i < someName.length; i++) {
  nameHashTable.put(someName[i]);
}
nameHashTable.showDistro();

//test betterHash
