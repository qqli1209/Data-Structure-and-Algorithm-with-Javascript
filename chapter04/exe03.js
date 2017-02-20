//数据结构：栈
function Stack(){
  this.dataStore = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.top = 0;
  this.clear = clear;
  this.length = length;
}
//入栈
function push(element){
  this.dataStore[this.top++] = element;
}
//出栈
function pop(){
  return this.dataStore[--this.top];
}
//查看栈顶元素
function peek(){
  return this.dataStore[this.top-1];
}
//清空栈
function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.top = 0;
}
//栈的长度
function length(){
  return this.top;
}

print("----------------exe03------------------");
function peiz(stack,element){
  var getColorStack = new Stack();
  var setColorStack = new Stack();
  while(stack.length()>0){
    if(stack.peek()==element){
      getColorStack.push(element);
    } else {
      setColorStack.push(stack.peek());
    }
    stack.pop();
  }
  while(setColorStack.length()>0){
    stack.push(setColorStack.peek());
    setColorStack.pop();
    print(stack.peek());
  }
}


//test
var sweetBox = new Stack();
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('red');
sweetBox.push('white');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('red');
peiz(sweetBox,"red");
