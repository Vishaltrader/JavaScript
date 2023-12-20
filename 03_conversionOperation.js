let score = null  //"33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); //it will print NaN (not a number)

// conversion
//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Hello" // 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hello" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//*********************** Operations ************************/

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " India"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log( (3 + 4) * 5 % 3); //right way

console.log(+true); // worst way +true
console.log(+""); //not good

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //not good way (poor readability)

let gameCounter = 100
++gameCounter;
console.log(gameCounter);