// this the about string all details

//add two strings
"hello"+"world"
//string also code in dubble quetes and also single comma also 

const name="ali "
const repoCount=40 
// console.log(name+repoCount+"value");
//above this outdated

//use backticks
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// here string is objects  
const gameName=new String("heloow");

console.log(gameName[3]); // it print index 3 like o 

//access the use this
console.log(gameName.__proto__);//print {} object

console.log(gameName.length);//print 8
console.log(gameName.toUpperCase()); // HELOOW
console.log(gameName.charAt(6));

//trim is used to remve the above space
console.log(name.trim());

const url="https://ali.com/his%20"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
