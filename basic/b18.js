// Hoisting means JavaScript moves all declarations (like variables and functions) to the top
//  of their scope before running the code.JavaScript reads your code first, and sets up all 
// variables and functions in memory before it starts executing line by line.

//nested function scope discuss

function one(){
    const username="ali"
    function two(){
        const website="youtube"
        console.log(username)
    }
//console.log(website); because website is declared indie of function two and its scope in two()
    two()// this will not print  or execute because it is int scope but function one is not call
}

//one ()
if(true){
    const username="ali"
    if(username==="ali"){
        const website="youtube"
        console.log(username+website)
    }
    //console.log(website);// this will cause error scope error
}
//console.log(username)//this will also cause scope error

//++++++++++interesting+++++++++++++++++
function addone(num){
    return num+1;
}
addone(5);//if we call it before declaration then it will work

const addtwo=function(num){
    return num+3;
}
addtwo(2);//if we use it before declaration then it cause error
console.log(addtwo);





