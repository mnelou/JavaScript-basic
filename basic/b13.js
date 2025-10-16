// oject singleton


const tinderuser={}
tinderuser.name="3223"
tinderuser.id="32"
tinderuser.isLoge=false

console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.value(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('ali'))

 const regularuser={
    email:"sona@gmail.com",
    fullname:{
        userfullname:"ali",lastname:"nauman"
    }
 }
 console.log(regularuser.fullname?.userfullname.firstname)

 // how to merge objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj5={obj1,obj2}// this is use for merge two objects along name of objects
 const obj3=Object.assign({},obj1,obj2)//{} this is optional parameter that actual define
 //  const returnedTarget=Object.assign(target,source,source); source will be multi
console.log(obj3);
// best use of merge two object 

const obj4={...obj1,...obj2}
console.log(obj4);

