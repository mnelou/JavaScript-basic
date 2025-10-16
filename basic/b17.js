// scope ,it start with three key word
let a=0  //if let is inside curly braces then inside {} tese it has its own scope outer side it has no scope
console.log(a);
{
let a1=0
}
//console.log(a1);//this cause a error because its scope is only in curly braces not 
// outside call it or work it and it is not define

{
const b1=20 // it also cause scope error like let

}
//console.log(b1);

const b=20
console.log(b);

{
    var c1=23 // var does not has any scope case it will work inside or outside of its 
// declaration of variable and available that way it is bad use ,it can be declared again multi time 

}
console.log(c1);
var c=23
console.log(c);
 
let f=44;

{
    console.log(f); //print 44
}

//but
{
    let f=50
    console.log(f);// now print 50 due to scope prefer
}
console.log(f);// now again print 44

//let a=5; //if again declare same name variable cause syntax error
var c=4;
console.log(c);