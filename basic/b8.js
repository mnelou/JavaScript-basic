//about math function etc
const score=400
console.log(score);
//this is used for number data type and we use number for that ,that give 100 percentage 
// guantee for about this is number
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber=13.33
console.log(othernumber.toPrecision(1));

const hundreds=10000000000
console.log(hundreds.toLocaleString('en-UK'))// for print comma in number 

//+++++++++maths++++++++++
console.log(Math);
console.log(Math.abs(-2)); //make positve and always positive

console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(32.4));
console.log(Math.min(42,2,15,3,2));
console.log(Math.max(32,1.4,4,1,4,2,42,));

//math dot random

console.log(Math.random());//give the value 0 and 1 between
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log((Math.random()*(max-min+1))+min);
