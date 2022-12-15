function add(numb1, numb2) {
  let num1 = numb1;
  return num1 + numb2;
}
//  💀  String on line 2 ?? - Going to concatenate rather than sum? Is that desired?


function multiply(num1, operator, num2) {
    num1, operator, num2
    if (operator === '*'){
     return num1 * num2
    }
}
// 💀  no actual function is being carried out, nothing is being returned


function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return firstName + " " + lastName + " " + "has no pets";
  }
}
// 💀  Line 15 true is a string, needs to be boolean or not deeply equal. Line 19 is after return, so will not be accessed. 


let myAccountNumbers = {
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};
//  💀  line 26 is a string, not number like the rest


function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers['account2'];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}
//  💀  line 35, not going to access because referencing array index rather than object key. line 37, if accessed correctly, going to try to add a string and a number (22012)


function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return answer;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return answer;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return answer;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return answer;
  } else {
    let answer = "Invalid inputs. Try again!";
    return answer;
  }
}
//  💀  return answer on exit of each if statement and remove semi-colon on line 60


//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
