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

//test
var s = new Stack();
s.push("Ford");
s.push("Elsie");
s.push("Delos");
print(s.peek());
s.clear();
print(s.peek());
s.push("Ford");
s.push("Elsie");
s.push("Delos");
s.pop();
print(s.length());

//数制间的相互转换
print("-------------------数制转换--------------------");
function mulBase(num,base){
  var s = new Stack();
  do {
    s.push(num%base);
    num = parseInt(num/=base);
  } while(num>0);
  var outPut = "";
  //s.length()一直在变，不能放入for循环里面
  //way1
  /*
  var times = s.length();
  for(var i=0; i < times; ++i) {
    outPut += s.pop();
  }
  */
  //way2
  while (s.length()>0) {
    outPut += s.pop();
  }
  return outPut;
}

//test
print(mulBase(9,2)); //1001
print(mulBase(99,2)); //1100011
print(mulBase(512,2)); //1000000000
print(mulBase(9,8)); //11
print(mulBase(99,8)); //143
print(mulBase(512,8)); //1000
print("----------------------------------\n\n\n");


print("----------------用栈判断是否是回文------------------");

function isPalindrome(word){
  var wordIn = new Stack();
  var wordOut = "";
  for(var i=0; i<word.length; ++i){
    wordIn.push(word[i]);
  }
  for(var j=0; j<word.length; ++j){
    wordOut += wordIn.pop();
  }
  if(word == wordOut){
    print(word + " is plindrome.")
  } else {
    print(word + " is not plindrome.")
  }
}

//test
isPalindrome("abc");
isPalindrome("aba");
isPalindrome("12321");
isPalindrome("rececer");
isPalindrome("hello");

print("----------------------------------\n\n\n");




print("----------------用栈判断实现递归------------------");
//通常的递归实现
function factorial(n){
  if(n==0){
    return 1;
  } else {
    return n*factorial(n-1);
  }
}
//print(factorial(5));

//栈实现递归
function fact(n){
  var s = new Stack();
  var outPut = 1;
  while(n>0){
    s.push(n--);
  }
  while (s.length()>0) {
    outPut *= s.pop();
  }
  return outPut;
}

print(fact(5));
print(fact(6));

print("----------------------------------\n\n\n");


print("----------------exe01,用栈判断括号匹配------------------");

function bracketMatching(str){
  str = str.toString();
  var s = new Stack();
  var mismath = [];
  for(var i=0; i<str.length; ++i){
    if(str[i]=="("){
      s.push(str[i]);
      mismath.push(i+1);
    }
    if(str[i]==")"){
      if(s.pop()){
        mismath.pop();
      } else {
        mismath.push(i+1);
      }
    }
  }
  return mismath;
}

//test
print(bracketMatching("2.3+23/12+(3.14*0.24"));
print(bracketMatching(")a+b+(+c"));
print(bracketMatching("(b+a))+(c+d"));
print("----------------------------------\n\n\n");



print("----------------exe02,用栈中缀表达式变后缀表达式------------------");

function suffixExpression(expression){
  var S1 = new Stack(); //运算符栈
  var S2 = new Array(); //输出结果
  for(var i=0; i<expression.length; ++i){
    //右括号，弹出栈顶到结果，直到遇见左括号，把左括号弹出去
    if(expression[i]==")"){
      print(S1.dataStore);
    print(S1.length());
    print(S1.peek()!="(" && S1.length()>0);
    print(S1.peek());
      while(S1.peek()!="(" && S1.length()>0){
        S2.push(S1.pop());
      }
      print(S1.dataStore);
      print(S1.length());
      print(S1.peek());//
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
          S2.push(S1.pop());
        }
        S1.push(expression[i]);
      }
      //遇到 *, / ,所有元素出栈，直到遇到左括号或 +, -
      else {//print("+,-");
        while(["+","-","("].indexOf(S1.peek())>-1 && S1.length()>0){
          S2.push(S1.pop());
        }
        S1.push(expression[i]);
      }
    }
    //其余情况就是操作数，直接入结果栈
    else {//print("num");
      S2.push(expression[i]);
    }
  }
  //S1所有元素出栈
  for(var i=0; i<S1.length(); ++i){
    S2.push(S1.pop());//print("S1 pop");
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














print("----------------------------------\n\n\n");
