putstr("Enter a month number(less than 4): ");
var monthNum = readline();
var monthName;
switch(monthNum){
  case "1":
    monthName = "January";
    break;
  case "2":
    monthName = "Febrary";
    break;
  case "3":
    monthName = "March";
    break;
  default:
  print("bad input");
}
print(monthName);
