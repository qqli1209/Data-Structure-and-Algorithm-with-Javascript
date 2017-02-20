load("HashTable.js");
//随机生成min到max之间的数字
function randomInt(min,max){
  return Math.floor(Math.random()*(max-min+1)) + min;
}
//生成9位的studentID 和50-100的成绩
function genStuData(arr){
  for (var i = 0; i < arr.length; i++) {
    var num = "";
    for (var j = 0; j < 9; j++) {
      num += Math.floor(Math.random()*10);
    }
    num += randomInt(50,100);
    arr[i] = num;
  }
}

//生成学生数据
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
print("students data:");
for (var i = 0; i < students.length; i++) {
  print(students[i].substring(0,8) + " " + students[i].substring(9));
}
//建立散列表
var studentHashTable = new HashTable();
for (var i = 0; i < students.length; i++) {
  studentHashTable.put(students[i].substring(0,8));
}
print("Data Distribution:");
studentHashTable.showDistro();
