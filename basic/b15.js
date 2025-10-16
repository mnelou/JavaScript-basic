// function in javascripts


function saymyName(){
    console.log("h");
    console.log("g");
    console.log("e");
    console.log("s");
}

// saymyName  -> is a funciton reference
// saymyName()  -> is a funciton execution of that

saymyName();


// add two numbers but parameter data type is not required for write 
function addtwon(number1,number2){
    // number1+number2
    console.log(number1+number2);
}
// inside the braces arguments passing
addtwon(3,8);
addtwon(3,"8");//also work fine
addtwon(3,9.3);// also work fine 

//also store in variable

const result=addtwon(3,2);

// console.log("Results: ",result);//print it undefined solve this proble  we write again
//  this code becasue we are storing in varible then print the varible inside value that
//  cause undefine  undefined  <-- because nothing was returned


function addtwons(number1,number2){
   
    let result=number1+number2;
    // if we write something inside the function something print 
    console.log("ali:");
    return result;
}// this is work fine  but after result anything is not print and execute

const r=addtwons(4,2);
console.log("Result: ",r);

function login(username){
    return `${username} just logged in`
}

let re=login("ali");

console.log(re);

// if argument is nothing pass then is cause undefine

function logins(username){
    if(username===undefine){
        console.log("please enter a username")
return username;    }
}