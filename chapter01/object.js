function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount){
  this.balance += amount;
}

function withdraw(amount){
  if(this.balance >= amount){
    this.balance -= amount;
  } else {
    print("Insufficient funds!");
  }
}

function toString(){
  return "balance: " + this.balance;
}

var account = new Checking(5000);
print(account.toString()); //balance: 5000
account.deposit(5000);
print(account.toString()); //balance: 10000
account.withdraw(3000);
print(account.toString()); //balance: 7000
account.withdraw(20000);  //Insufficient funds!//Insufficient funds!
