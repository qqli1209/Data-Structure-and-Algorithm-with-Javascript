//散列表
function HashTable(){
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
  this.showDistro = showDistro;
  this.buildChain = buildChain;
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
//显示散列表中的数据
function showDistro(){
  for (var key=0; key<this.table.length; ++key){
    if(this.table[key][0]!=undefined){
      print(key + " -> " + this.table[key]);
    }
  }
}
//开链法防止碰撞
function buildChain(){
  for (var i = 0; i < this.table.length; i++) {
    this.table[i] = new Array();
  }
}
//将数据存入散列表
function put(key,data){
  var pos = this.betterHash(key);
  
}
//读取数据
function get(key){

}
