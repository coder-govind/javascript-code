let newDate = new Date();
console.log(newDate);
console.log(newDate.toDateString())
console.log(newDate.toString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleTimeString())
console.log(newDate.getTime())

let myDate = new Date(2025, 0, 29, 12,0,0 )

console.log(myDate.toString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myDate.getTime())

console.log(Math.floor(myDate.getTime()/1000));

let DATE = new Date();

console.log(DATE.toString());
console.log(DATE.getMonth() + 1);
console.log(DATE.getDay());

