// // for of loop

// const arr=[1,3,4,5,5];
// // for (const iterator of object){

// // }

// // for of loop (object)
// // for(const num of object){
// // console.log(num);
// // }

// // for of loop (array)
// for(const num of arr){
// console.log(num);

// }
// // for of loop (string)
// const greetings="hellow world"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Maps 
// Map is a object holds key-value pairs and also hold unique values with respect to key and 
// remembers the original insertion order of the keys.Any value(both objects and primitive 
// values) may be used as either a key or value

const map=new Map()
map.set('PK','Pakistan');
map.set('USA','united states o f America');
map.set('FR','France');

console.log(map);

//for of loop on map
for(const key of map){
    console.log(key);
}
//de structure of Map and give separate values
for(const [key,value] of map){
    console.log(key,':-',value);
}

const myobject={
    'game1':'NFS',
    'game2':'Spiderman'

}

// for(const [key,value] of myobject){
//     console.log(key,':-',value);
// } // it is not iteratable


const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
// for in loop for object and that is work 

for (const key in myObject) {
  console.log(key);
    
}
for (const key in myObject) {
  console.log(myObject[key]);
    
}
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming=["js","rb","java","cpp"]
for (const key in programming) {
 console.log(key);
    
}// it gives key of array

for (const key in programming) {
 console.log(programming[key]);
    
}

