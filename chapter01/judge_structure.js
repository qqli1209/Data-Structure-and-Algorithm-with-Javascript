var low = 1;
var high = 50;
var middle = 25;
var found = -1;
var cur = 13;
if(cur<middle){
  middle = (cur-low)/2;
  print(middle);
} else if(cur>middle){
  middle = (high+cur)/2;
  print(middle);
} else {
  print("error");
}
