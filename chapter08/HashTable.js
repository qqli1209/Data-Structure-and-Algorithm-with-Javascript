//散列表
function HashTable(){
  this.table = new Array(137);
  this.values = new Array();
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
  this.showDistro = showDistro;
}
//简单散列函数,ASCII码对数组长度取余
function simpleHash(data){
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total%this.table.length;
}
//更好的散列函数：霍纳算法,ASCII码乘以一个质数再相加
function betterHash(data){
  var total = 0;
  var H = 37;
  for (var i = 0; i < data.length; i++) {
    total += H*data.charCodeAt(i);
    }
    return total%this.table.length;
}
//将数据存入散列表
/*
function put(data){
  var key = this.betterHash(data);
  this.table[key] = data;
}
*/
//显示散列表中的数据
function showDistro(){
  for (key in this.table){
    print(key + " -> " + this.table[key]);
  }
}

//线性探测法处理碰撞
function put(key,data){
  var pos = this.simpleHash(key);
  while(this.table[pos]!=undefined){
    pos++;
  }
  this.table[pos] = key;
  this.values[pos] = data;
}
function get(key){
  var pos = this.simpleHash(key);
  while(this.table[pos]!=key){
    pos++;
  }
  return this.values[pos];
}
