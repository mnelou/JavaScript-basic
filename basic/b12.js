// Singleton 
// Only one object in the whole program (like a principal in school)
// It is made using a constructor

// Object literals
// In objects, we use key and value (both can be defined)
// when use symbol in object then we first need to declare it then use it in object
const mysym=Symbol("key1");

const jsuser = {
    name: "ali",
    "name": "ali",// here name is access only method 2 not by using dot
    [mysym]:"mykey1",
    age: 19,
    location: "chiniot",
    lastLoginDays: ["Monday", "Saturday"]
};

// How to access objects
// Method 1:
console.log(jsuser.age); // 

// Method 2:
console.log(jsuser["age"]); // here age is string and its value is in number or integer
//console.log(jsuser[age]); this cause error

console.log(jsuser[mysym]);
// we can change the value
jsuser.name="Nauman"

// we can freeze the object that later can not their change property 
// Object.freeze(jsuser);
jsuser.name="ali"
console.log(jsuser["name"]);// value can't change

jsuser.greeting=function(){
    console.log("hello 23 user:");
}
console.log(jsuser.greeting);// behave as undefine
console.log(jsuser.greeting()); 
// second 
jsuser.greetingtwo=function(){
    console.log(`hello 23 user:,${this.lastLoginDays}`);
}
console.log(jsuser.greeting);// behave as undefine
console.log(jsuser.greetingtwo()); 
