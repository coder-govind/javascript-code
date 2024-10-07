const name = "govind"
const roll_no = "4279"
const college = "pggc11"

// console.log(`hii my name is ${name} and my roll no. is ${roll_no} and I am from ${college} chandigarh.`)

const goal = new String("GSOc 2025")

// console.log(typeof goal);
// console.log(goal[5]);
// console.log(goal.length);
console.log(goal.toUpperCase());
console.log(goal.indexOf('S'));
console.log(goal.charAt(6));

const newString = goal.substring(5,9)
console.log(newString);

const anotherString = goal.slice(-4,-1)
console.log(anotherString);

const str = "   RAM    "

console.log(str.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","-"));
console.log(url.includes('choudhary'));

console.log(url.includes('nitesh'));

const str2 = "coder,govind,chauhan,GC11"

console.log(str2.split(','));
