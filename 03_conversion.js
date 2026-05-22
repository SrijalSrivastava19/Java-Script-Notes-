let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)
//  when we try to convert a string that contains non-numeric characters to a number, it results in NaN (Not a Number). This is because the conversion fails and the value cannot be represented as a valid number.
//  NAN ---> Not a Number
//  it is a property of the global object and it is used to represent a value that is not a number. It is returned when a mathematical operation or function is performed on a value that cannot be converted to a number.

let score2 = null
let valueInNumber2 = Number(score2);
console.log(typeof score2)
console.log(score2)

// when we try to convert null
//  to a number, it results in 0. This is because null is considered a falsy value in JavaScript, and when it is converted to a number, it is treated as 0.


let isLoggedIn = 1
let booleanIsLoggedIN = Boolean(isLoggedIn);
console.log(typeof isLoggedIn)
console.log(booleanIsLoggedIN)

//  when it is empty it's a false 
//  when it is not empty it's a true
//  when it is 0 it's a false
//  when it is not 0 it's a true
//  when it is null it's a false
//  when it is undefined it's a false
//  when it is NaN it's a false

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)


//  when we convert a number to a string, it simply represents the number as a sequence of characters. For example, the number 33 would be converted to the string "33".

// ********************Operations***********************

let value = 3
let negvalue = -value
console.log(negvalue)
//  when we apply the negation operator to a number, it changes the sign of the number. For example, if we have a positive number like 3, applying the negation operator would result in -3. Similarly, if we have a negative number like -5, applying the negation operator would result in 5.

// console.log(2+2)
// console.log(4-2)
// console.log(2*2)
// console.log(4/2)
// console.log(5%2)
// console.log(2**3)

//  when we perform arithmetic operations on numbers

let str1 = "hello"
let str2 = " Srijal"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(2+2+"1");

console.log(true);
console.log(+true);
console.log(+"");


let num1 , num2 , num3
num1 = num2 = num3 = 2+2
console.log(num1 , num2 , num3)


let gameCounter = 100
gameCounter++;
++gameCounter;
--gameCounter;

console.log(gameCounter)
// prefix and postfix increment operator
//  the difference between prefix and postfix increment operators is the order of evaluation. In the case of the postfix increment operator (gameCounter++), the current value of gameCounter is returned first, and then it is incremented. In contrast, with the prefix increment operator (++gameCounter), the value of gameCounter is incremented first, and then the new value is returned.



