


//test
var text = read("jan.txt");
var text = text.split("\n");
//print(text.length);
var words = [];
var num = 0;
for (var i = 0; i < text.length; i++) {
  if (text[i]!="") {
    var wordTemp = text[i].split(" ");
    for (var j = 0; j < wordTemp.length; j++) {
      words[num] = wordTemp[j];
      num++;
    }
  }
}

//HashTable
var wordsTable = {};
for (var i = 0; i < words.length; i++) {
  if (words[i] in wordsTable) {
    wordsTable[words[i]]++;
  } else {
    wordsTable[words[i]] = 1;
  }
}
for (var key in wordsTable) {
  print(key + " -> " + wordsTable[key]);
}
