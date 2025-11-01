//literal object

const user={
  username:"ali",
  loginCount:8,
  signedIn:true,
getuserDetails:function(){
  console.log("Got user details from database")
//to give the current word thing instruct =>use this keyword 
console.log(`username:${this.username}`)
//function context 
console.log(this);
  
}
  
}



console.log(user.username);
console.log(user.getuserDetails());
//gobale context 
console.log(this)


