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

print("----------------exe02,用栈中缀表达式变后缀表达式------------------");

function suffixExpression(expression){
  var S1 = new Stack(); //运算符栈
  var S2 = new Array(); //输出结果
  for(var i=0; i<expression.length; ++i){
    //右括号，弹出栈顶到结果，直到遇见左括号，把左括号弹出去
    if(expression[i]==")"){
      while(S1.peek()!="(" && S1.length()>0){
        S2[S2.length] = S1.peek();
        S1.pop();
      }
      //print(S1.dataStore);
      //print(S1.length());
      //print(S1.peek());//
      S1.pop();
      //print("( pop at " + i);
    }
    //左括号, 直接入运算符栈
    else if(expression[i]=="(") {//print("get ( at" + i);
      S1.push(expression[i]);//print("(");
    }
    //遇到 +, -,*, /, 从栈中弹出元素直到遇到发现更低优先级的元素或者栈空为止
    else if(["+","-","*","/"].indexOf(expression[i])>-1) {
      //,遇到+, -, 所有元素出栈，直到遇到左括号
      if(["+","-"].indexOf(expression[i])>-1){//print("*,/");
        while(S1.peek()!="(" && S1.length()>0){
          S2[S2.length] = S1.peek();
          S1.pop();
        }
        S1.push(expression[i]);
      }
      //遇到 *, / ,所有元素出栈，直到遇到左括号或 *, /
      else {//print("+,-");
        while(["*","/"].indexOf(S1.peek())>-1 && S1.length()>0){
          S2[S2.length] = S1.peek();
          S1.pop();
        }
        S1.push(expression[i]);
      }
    }
    //其余情况就是操作数，直接入结果栈
    else {//print("num");
      S2.push(expression[i]);
    }
    print(expression[i] + " S1 : "+S1.dataStore);
    print(expression[i] + " S2 : "+S2);
  }

  //S1所有元素出栈
  for(var i=0; i<S1.length(); ++i){
    S2[S2.length] = S1.peek();
    S1.pop();//print("S1 pop");
  }
  return S2.join(" ");
}

print(suffixExpression("a+b*c+(d*e+f)*g"));
//print(suffixExpression("1+((2+3)*4)-5"));
//print(suffixExpression("5*(9.1+3.2)/(1-5+4.88)"));



print("----------------------------------\n\n\n");


print("----------------并计算后缀表达式的值------------------");

function countSuffixExpression(expression){

}
