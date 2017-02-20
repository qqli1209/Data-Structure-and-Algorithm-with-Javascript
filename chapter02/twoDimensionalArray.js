Array.matrix = function(numrows,numcols,initial){
  var arr = [];
  for(var i=0; i<numrows; ++i){
    var columns = [];
    for(var j=0; j<numcols; ++j){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

var nums = Array.matrix(5,5,0);
print(nums[2][2]); //0

var names = Array.matrix(2,2,"");
names[1][2] = "Elsie";
print(names[1][2]); //Elsie

var grades = [[89,77,78],[76,82,81],[91,94,89],[89,87,95]];
print(grades[2][2]); //89
print("-----------------------------------");

//access to array element
for(var i=0; i<grades.length; ++i){
  var total = 0;
  var average = 0.0;
  stu = grades[i];
  for(var j=0; j<stu.length; ++j){
    total += stu[j];
  }
  average = total/stu.length;
  print("stu " + (i+1) + " average : " + average.toFixed(2));
}

print("--------------------------------");
function ave(nums){
  var total = 0;
  for(var i=0; i<nums.length; ++i){
    total += nums[i];
  }
  var average = total/nums.length
  return average.toFixed(2);
}

print(grades.map(ave));
print("------------------------------------");
/*
var cols = grades[0].length;
for(var i=0; i<cols; ++i){
  var total = 0;
  var average = 0.0;
  for(var j=0; j<grades.length; ++j){
    total += grades[j][i];
  }
  average = total/grades.length;
  print("test " + (i+1) + " average : " + average.toFixed(2));
}
*/
var grades = [[89,77],[76,82,81],[91,94,89,99]];
for(var i=0; i<grades.length; ++i){
  var total = 0;
  var average = 0.0;
  for(var j=0; j<grades[i].length; ++j){
    total += grades[i][j];
  }
  average = total/grades[i].length;
  print("test " + (i+1) + " average : " + average.toFixed(2));
}
