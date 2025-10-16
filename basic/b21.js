//control flow 
//if 
// if(condition==true){
// code will execute otherwise not
// }

//  <,>,<=,>=,==,!=,===

if(2-2==0){
    console.log("lala")
}// === will check also their type of data type


const score=200

if(score>100){
    const power="fly"
    console.log(`user power:${power}`);
}

// this will not execute if we write var then it will execute console.log(power);


const balance=33
// if(balance >400)console.log("ali") //this is implesive method to write
// if(balance >400)console.log("ali"),console.log("woo"); 

if(balance <500){
    console.log("less than 540");
}else if(balance >4){
    console.log("yes low");
}
else {console.log("nothing in it")}

const userLogin=true
const debitCard=true

if(userLogin && debitCard){
    console.log("allow to buy course");
}

if(userEmail.length===0){
    console.log("array is empty");
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

