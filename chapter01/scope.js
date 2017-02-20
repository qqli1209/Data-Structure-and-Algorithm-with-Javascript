var scope = "global";
function showScope(){
  scope = "local";
  return scope;
}

print(scope); //global
print(showScope()); //local
print(scope); //local,篡改了全局变量，因为函数内部scope没有用var声明
