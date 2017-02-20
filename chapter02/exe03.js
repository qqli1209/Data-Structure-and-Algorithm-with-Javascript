function monthlyTemps(){
  this.data = [];
  this.add = add;
  this.weekAverage = weekAverage;
  this.monthAverage = monthAverage;
  this.everyWeekAverage = everyWeekAverage;
}
//增加一周的数据
function add(temp){
this.data.push(temp);
}

//查询某周的平均气温
function weekAverage(whichWeek){
  if(whichWeek > this.data.length){
    print("周数超出记录范围");
    return false;
  }
  var total = 0;
  var ave = 0.0;
  for(var day=0; day<this.data[whichWeek-1].length; ++day){
    total += this.data[whichWeek-1][day];
  }
  ave = total/this.data[whichWeek-1].length;
  return ave.toFixed(2);
}

//整个月的平均气温
function monthAverage(){
  var total = 0;
  var ave = 0.0;
  var totalDay = 0;
  for(var i=0; i<this.data.length; ++i){
    for(var j=0; j<this.data[i].length; ++j){
      total += this.data[i][j];
      totalDay ++;
    }
  }
  ave = total/totalDay;
  return ave.toFixed(2);
}

//每周的平均气温
function everyWeekAverage(){
  var ave = [];
  for(var week=0; week<this.data.length; ++week){
    var total = 0;
    for(var day=0; day<this.data[week].length; ++day){
      total += this.data[week][day];
    }
    ave[week] = (total/this.data[week].length).toFixed(2);
  }
  return ave;
}

//测试案例
var Nov = new monthlyTemps();
Nov.add([12,13,15,16,11,10,15]);
Nov.add([7,8,5,6,9,4,2]);
Nov.add([6,8,7,11,13,5,9]);
Nov.add([2,3,4,5,8,1,2]);
print("enter a week number(1-4) to check:")
var num = readline();
print("week " + num + " average : " + Nov.weekAverage(num));
print("Nov every week average : " + Nov.everyWeekAverage());
print("Nov average : " + Nov.monthAverage());
