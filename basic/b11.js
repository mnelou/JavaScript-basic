// //Array part 2
// const heros=["ali","usman","Arslan"]
// const zero=["foji","cell phone","only phone"]
// const newArr=zero.join() // this convert the arry into string form

// // heros.push(newArr);
// // console.log(heros);
// // heros.push(zero);

// //console.log(heros);
// //console.log(heros[1]);

// //+++++++++++how to merge two array and make them one array
// const allhereo=heros.concat(zero)
// console.log(allhereo);

// //spread operator for  combine two array
// const allhero2=[...heros,...zero];
// console.log(allhero2);


//++++++array in side in arrrays++++++
const another_array=[2,4,5,8,1,[4,6,6,3,2,0],[1,2,3,4,5,6,2,1]];
// make the all element of different arrays into one array
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);





console.log(Array.isArray("ali"))
console.log(Array.from("ali"))


console.log(Array.from({name: "ali"}))//interesting

let s1=100
let s2=200
let s3=400

console.log(Array.of(s1,s2,s3));

// above these array are method 