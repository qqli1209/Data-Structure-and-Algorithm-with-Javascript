load("dictionary.js");

var wordsDic = new Dictionary();
print("enter some wors: ");
var words = readline();
words = words.split(" ");
wordsDic.wordCount(words);
wordsDic.showAll();
