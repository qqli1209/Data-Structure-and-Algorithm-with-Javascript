function sentence(){
  this.words = [];
  this.toSentence = toSentence;
  this.add = add;
}

function toSentence(){
  return this.words.join("");
}
function add(w){
  this.words.push(w);
}

var sentenceTemp = new sentence();
sentenceTemp.add("F");
sentenceTemp.add("o");
sentenceTemp.add("r");
sentenceTemp.add("d");
print(sentenceTemp.toSentence());
