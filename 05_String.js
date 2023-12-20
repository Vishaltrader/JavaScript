const name = "vishal"
const repoCount = 50

// console.log(name + repoCount + " value"); // outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vishal-vg')

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "     vishal     "
console.log(newStringOne.trim());

const url = "https://vishal.com/vishal%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('vishal'))
console.log(url.includes('ram'))