/*const userEmail="ali@gmail.com"
if(userEmail){
    console.log("Got user email");
}else {console.log("Don't have user email");

}
falsy values 
false,0,-0,BigInt 0n,"",null,undefined,NaN

truthy values
"0",'false'," ",[],{},function(){},
false==0,

*/

//Nullish coalescing operator(??):null undefined

let val1;
// val1=4 ?? 10

val1=null ??10
console.log(val1);
val1=null??10??20// it will execute 10 and it consider as a first and null 
// will not execute according to program condition and 10 print because it is first 


//terniary operator

// condition?true:false

const iceprice=100
iceprice<=80?console.log("less than 80"):console.log("more than 80");