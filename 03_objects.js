// Singleton

// object literals (we are taking about literals)

const mySym = Symbol("key1")

const JsUser = {
    name: "Vishal",
    "full name": "vishal kumar",
    [mySym]: "myKey1",
    age: 23,
    location: "kolkata",
    email: "vishal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // better way
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "vishal@google.com"
// Object.freeze(JsUser)
// JsUser.email = "vishal@microsoft"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());