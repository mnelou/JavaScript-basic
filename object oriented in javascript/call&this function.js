//call and this function 
function SetUsername(username){
//complex DB calls
  this.usermane=username
console.log("called");
  
}

function createUser(username,email,password){
  // SetUsername(username)
  //hold Reference to use .call
  SetUsername.call(this.username)
  
  this.email=email
  this.password=password
}

const chai=new createUser("chai","chai#gmaile.com","123")
