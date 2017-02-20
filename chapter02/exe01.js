function grade(){
  this.scores = [];
  this.average = average; //计算平均成绩
  this.add = add; //添加成绩
}

function add(score){
  this.scores.push(score);
}
function average(){
  var ave = 0.0;
  var total = 0;
  for (var i = 0; i < this.scores.length; i++) {
    total += this.scores[i]
  }
  ave = total/this.scores.length;
  return ave;
}
var gradeTemp = new grade();
gradeTemp.add(80);
gradeTemp.add(86);
gradeTemp.add(82);
gradeTemp.add(65);
gradeTemp.add(98);
gradeTemp.add(76);
gradeTemp.add(93);
print(gradeTemp.average());
print(gradeTemp.scores);
