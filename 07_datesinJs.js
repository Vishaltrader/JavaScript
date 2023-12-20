// Dates

// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// console.log(new Date(2023, 0, 23).toLocaleString());

let myCreatedDate1 = new Date("02-18-2023")
// console.log(myCreatedDate1.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime()); //comparison should be in m second
// console.log(Math.floor(Date.now()/1000)); // in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `&{newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long"
})
// ctrl+space for more attributes