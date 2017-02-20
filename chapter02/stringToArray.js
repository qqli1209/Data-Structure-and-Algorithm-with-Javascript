var sentence = "my name is lqq";
var words = sentence.split(" "); // my,name,is,lqq
print(words);
for(var i=0; i<words.length; i++){
  print("word " + i + ":" + words[i]);
}
print(Array.isArray(words)); // true

var newWords = words; //默认传引用，浅复制，新数组仍然指向以前的数组
print("words :" + words);
print("newWords :" + newWords);
newWords[3] = "sbb";
print("change newWords:");
print("words :" + words);
print("newWords :" + newWords);

//深度复制
function copy(arr1,arr2){
  for(var i=0; i<arr1.length; i++){
    arr2[i]=arr1[i];
  }
}

var newWords = [];
copy(words,newWords);
print("words :" + words);
print("newWords :" + newWords);
words[3] = "dcq";
print("change newWords:");
print("words :" + words);
print("newWords :" + newWords);
