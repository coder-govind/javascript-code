const arr = ["captain", "hulk", "iron-man"];

const arr2 = ["bat-man","flash","super-man"];

// arr.push(arr2);

// console.log(arr);

// const arr3 = arr.concat(arr2);

// console.log(arr3);

// console.log(typeof arr3);

const arr4 = ["shaktimaan", "hanuman"];

const arr5 = [...arr,...arr2,...arr4]//spread fun.

// console.log(arr5);

// console.log(arr5[5]);

const arr6 = [1,2,3,[4,5,6],7,[8,[9]]]

const arr7 = arr6.flat(Infinity);

// console.log(arr7);

// console.log(Array.isArray("govind chauhan"));

console.log(Array.from("govind chauhan"));

// console.log(Array.from({name: "govind"}));


let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));
