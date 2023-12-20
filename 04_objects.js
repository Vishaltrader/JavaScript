//const tinderUser = new Object() // this is singleton object

const tinderUser = {} // this non singleton object

tinderUser.id = "1423ggd"
tinderUser.name = "vishal"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    emial: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vishal",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}; // not good way

// const obj4 = Object.assign({}, obj1, obj2, obj3) // empty {} acts as target

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// array objects (many comma separated object )
const users = [
    {
        id: 1,
        emial: "vishal@gmail.com"
    },
    {
        id: 1,
        emial: "vishal@gmail.com"
    },
    {
        id: 1,
        emial: "vishal@gmail.com"
    },
    {
        id: 1,
        emial: "vishal@gmail.com"
    },
]

users[1].emial

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));


const course = {
    coursename: "learn-javascript",
    price: "999",
    courseInstructor: "vishal"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // using of {} means destructuring 

console.log(instructor);

//website for API https://randomuser.me/
// these are in { json format}, [array]

//look like object but it is in json format API
// {
//     "name": "vishal",
//     "coursename": "javascript"
// }

// // array format API
// [
//     {},
//     {},
//     {}
// ]


