// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //return value will be not same so it will print false

const bigNumber = 94843878968249874n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "vishal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); //it will print object

//ECMAScript® Language Specification link bellow
//https://262.ecma-international.org/5.1/#sec-11./4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubeName = "HelloIndia"

let anotherName = myYoutubeName
anotherName = "HelloSir"

console.log(anotherName);
console.log(myYoutubeName);

// Non-Primitive

let userOne = {
    email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "Hello@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);