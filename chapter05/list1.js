//队列
function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.isEmpty = isEmpty;
  this.toString = toString;
  this.front = front;
  this.back = back;
  this.count = count;
}
//入队
function enqueue(element){
  this.dataStore.push(element);
}
//出队
function dequeue(){
  return this.dataStore.shift();
}
//判断队列是否为空
function isEmpty(){
  return this.dataStore.length == 0;
}
//转为字符串
function toString(){
  return this.dataStore.join(",");
}
//读取队首元素
function front(){
  if(this.dataStore.length>0){
    return this.dataStore[0];
  } else {
    return false;
  }
}
//读取队尾元素
function back(){
  if(this.dataStore.length>0){
    return this.dataStore[this.dataStore.length-1];
  } else {
    return false;
  }
}
//显示队元素个数
function count(){
  return this.dataStore.length;
}

//基数排序
print("-----------------------基数排序-------------------");
//根据个位/十位的数值，将数字分散到10个队列
function distribute(nums,queues,digit){
  for(var i=0; i<nums.length; ++i){
    if (digit==1) {
      var whichQueue = nums[i]%10;//print(whichQueue);
      queues[whichQueue].enqueue(nums[i]);
    } else if(digit==10){
      var whichQueue = Math.floor(nums[i]/10);
      queues[whichQueue].enqueue(nums[i]);
    }
  }
}

//从队列中收集数字
function collect(queues,nums){
  var num = 0;
  for (var i = 0; i < queues.length; i++) {
    while(queues[i].count()>0){
      nums[num++] = queues[i].dequeue();
    }
  }
}


//test
var queues = [];
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.random()*101);
}
print("original numbers: " + nums);
distribute(nums,queues,1);
collect(queues,nums);
distribute(nums,queues,10);
collect(queues,nums);
print("sorted numbers: " + nums);








print("----------------------------------------------------");
