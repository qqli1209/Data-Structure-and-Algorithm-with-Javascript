load("HashTable8.2.4.js");
var words = read("words.txt");
words = words.split("\n");
print("avaliable words:");
for (var i = 0; i < words.length; i++) {
  print(words[i])
}
//hash map
var wordsTable = new HashTable();
wordsTable.buildChain();
for (var i = 0; i < words.length; i++) {
  var word = words[i].split("  ");
  wordsTable.put(word[0],word[1]);
}
//查询系统
print("enter a word to query:(quit to stop)");
word = readline();
while(word!="quit"){
  print(wordsTable.get(word));
  print("\nenter a word to query:(quit to stop)");
  word = readline();
}
