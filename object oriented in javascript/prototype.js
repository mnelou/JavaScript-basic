//prototype
// let myName="Nauman   "

// console.log(myName.length);
// //show only real length of string
// console.log(myName.trim().length);

// console.log(myName.trueLength);



let myHeros=["thor","spiderman"]

let heroPower={
  thor:"hammer",
  spiderman:"sling",
  getSpiderPower:function(){
    console.log(`spidy power is ${this.spdierman}`);
  }
}
//we give power to all ,by giving prototype 
//all things are going through object 
Object.prototype.Nauman=function(){
  console.log(`Nauman is present in all objects`);
}
// heroPower.Nauman();
// myHeros.Nauman();

Array.prototype.hellow=function(){
  console.log(`nauman says hello`)
}

myHeros.Nauman();
myHeros.hellow();
// heroPower.hellow();  //heroPower has no power 



//inheritance

const User={
  name:"chai",
  email:"chai@google.com"
}

const Teacher={
  makeVideo:true
}

const TeachingSupport={
  isAvailable:false
}

const TASupport={
  makeAssignment:'JS assignment',
  fullTime:true,
  __proto__:TeachingSupport
}
//this is outdated
// Teacher.__proto__=User

//modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername="naumanlou  "
String.prototype.trueLength=function(){
  console.log(`${this}`);
  
  console.log(`${this.name}`);
  console.log(`True Length is:${this.trim().length}`);
  
}
 anotherusername.trueLength();
 
 "Nauman".trueLength();