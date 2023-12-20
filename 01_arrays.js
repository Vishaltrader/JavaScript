// array

const myArr1 = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "naag"]

// const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr1[3]);
// console.log(myArr2[3]);

// Array methods

// myArr1.push(6)
// console.log(myArr1);
// myArr1.pop()
// console.log(myArr1);

// myArr1.unshift(9)
// console.log(myArr1);
// myArr1.shift()
// console.log(myArr1);

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(3));
// console.log(myArr1.indexOf(9));

// const newArr = myArr1.join()

// console.log(myArr1);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3)

console.log(myn1);
console.log("B ", myArr1);


const myn2 = myArr1.splice(1, 3)
console.log(myn2);
console.log("B ", myArr1); // splice manipulate the original array