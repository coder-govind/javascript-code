const arry = [1,2,3,4,5,6];

const arry1= ["ram","shyam","radha","gopal"];

// console.log(arry);
// console.log(arry1);

const arry2 = new Array(10,20,30,40,50);

// console.log(arry2);

// console.log(arry2.slice(2,4));
// console.log("A =",arry2);

// console.log(arry2.splice(2,4));
// console.log("B =",arry2);

// console.log(arry[2]);

arry2.push(60);
console.log("C =",arry2);

arry2.pop();
console.log("D =",arry2);

arry2.unshift(5);
console.log("E =",arry2);

arry2.shift();
console.log("F =",arry2);

console.log(arry1.includes("radha"));

const arry3 = arry1.join();// converted in Strings 
console.log(arry1);

console.log(arry3);

console.log(typeof arry3);

console.log(typeof arry1);

console.log(typeof arry);


