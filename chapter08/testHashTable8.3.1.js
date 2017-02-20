//load("HashTable8.3.1.js");
load("HashTable8.2.4.js");
//test
var hTable = new HashTable();
hTable.buildChain();
var names = ["David","Jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","Danny","Jonathan"];
for (var i = 0; i < names.length; i++) {
  hTable.put(names[i],Math.floor(Math.random()*10));
}
print(hTable.get("Clayton"));
hTable.showDistro();
