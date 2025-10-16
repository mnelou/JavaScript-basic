// for in loop for object and that is work 

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

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
    
}///it gives value


const map=new Map()
map.set('PK','Pakistan');
map.set('USA','united states o f America');
map.set('FR','France');

for(const key in map){
    console.log(key);
}


