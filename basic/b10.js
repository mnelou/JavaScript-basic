//array part 1
// arrray how to declare the it

const myArr=[3,4,2,5,2]
//how to access the index of element and array also contain as a element object and array
console.log(myArr[3]);

const myHeros=["ali","nauman"];

// method of array
myArr.push(5)
console.log(myArr)

myArr.push(4);
myArr.pop() // this will remove the last element of array

// unshift help to push the value of element at first and 
// this take more time because shifting of element in to new index that is not used 
myArr.unshift(7)
console.log(myArr)

myArr.shift()// this is used to remove that we push the element by using unshift
console.log(myArr)

console.log(myArr.includes(9)); // true or false mai give answer help to check the element that is included or not

console.log(myArr.indexOf(3));// give the index 

const newArr=myArr.join() // this convert the arry into string form
console.log(myArr)
console.log(newArr)



console.log("A",myArr);
//++++++++++++slice++++++++++++++ 
/*array.slice(start, end)
start: index to begin extraction (inclusive)
end: index to stop extraction (exclusive)
Original array remains the same 
It returns a new array with selected elements.
Think of it as: “copy a part”.*/
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

//+++++++++++++splice++++++++++++
/*Purpose: Changes (modifies) the original array — can add, remove, or replace elements. 
Syntax: array.splice(start, deleteCount, item1, item2, ...) 
start: index to start changing 
deleteCount: how many elements to remove 
item1, item2, ...: optional items to insert 
📘 Example: 
let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 2, "grapes", "pear"); 
console.log(fruits);   // ["apple", "grapes", "pear", "orange"] 
🔹 It modifies the original array.
🔹 Think of it as: “cut and paste inside the array”.
 */

const myn2=myArr.splice(1,3,"ali")
console.log(myn2)
console.log(myArr)



