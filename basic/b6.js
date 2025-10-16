/* JavaScript uses **Dynamic Memory Allocation** — not static.
Stack → holds primitives and references (not dynamic itself, but auto-managed).
Heap → handles dynamically allocated objects, arrays, and functions.
Memory is assigned at runtime, not compile time.
Garbage collector automatically frees unused memory.
 JavaScript as a whole uses **dynamic memory management**, handled automatically.
NULL mean undefind like kuch nai
 */
let useremail;
const outsidetemp=null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//print false this is not same becasue these are unique
//for big number
const bigNumber=6876786787866n          //use n at the last

/*there are two type of data type 
1.primitive data type:
seven types: string,number,boolean,null,undefind like varialbe declare not assign value,
symbol make the value unique,bigIN*/

/*2.non primitive and reference type data type
array,objects,functions datatype any thing
*/
//arry
let ali=["ali","usman","mamo"];
//object
let myobj={ usi:"ali",age:33};

function greet(value) {        // function declaration
  return "Hello, " + value;
}// print data type function because this is function object 

//You can also assign a function to a variable.

const greets= function(value) {   // function expression
  return "Hello, " + value;
};

console.log(greet("Nauman"));

// how to check data type of variable

console.log(typeof bigNumber);//print undefined
console.log(typeof outsidetemp);//object but it is null 
console.log(typeof id)//print symbol data type

//memory type 
//stack use(primitive) 
// is mai aik copy milti hai
//heap(non-primitive)
// is mai reference atah hai


