// function name() {
//     console.log("govind chauhan");
// }

// name()

function addTwoNumbers(num1,num2){
    // let numbers = (num1 + num2);
    // return numbers 

    return num1 + num2 
}

const addition = addTwoNumbers(10,20) 
// if you return a values the you should store the values in variable 

// console.log(addition);

function loginUserMessage(username = "RAM"){
    if(!username){
        console.log("username not defined");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("govind"));

// console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1){
    return val2,val1,num1
}

console.log(calculateCartPrice(250,100,20,30,400));

const user = {
    username:"govind",
    price: 199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`); 
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})
// you can pass object directly

const arr = [200, 400, 500, 300]

function newArray(getArray){
    return getArray    
}

console.log(newArray(arr));
// console.log(newArray([2,3,4,5,6]));
