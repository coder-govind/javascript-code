// const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.ID = "123abc"
tinderUser.name = "SAM"
tinderUser.isloggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "govind",
            lastname: "chauhan"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = (Object.assign({},obj1,obj2,obj3));

// console.log(obj4);

const obj5 = {7:"g", 8:"h"}
const obj6 = {...obj1,...obj2,...obj3,...obj5}

// console.log(obj6);

// console.log(obj1);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedIn"));


