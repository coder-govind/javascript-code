const roll_number = Symbol("key1")

const obj = {
    name: "govind chauhan",
    age: 20,
    location: "CHD",
    marks: [50,69,70,80,90],
    [roll_number]: "4279/22",
    "course": "BCA"
}

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["course"]);
// console.log(obj[roll_number]);



obj.age = 21;

// console.log(obj);


obj.greeting = function(){
    console.log("hello govind");

    console.log(`my age is ${this.age}`);
    
}

console.log(obj.greeting());


