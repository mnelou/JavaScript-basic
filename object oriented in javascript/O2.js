//constructor function
//new keyword is used to create new instance
//new keyword is constructor function is allow to
//create multiple instances from one object and memory safe
//to create new context 


function User(username,loginCount,isLoggedIn){
  //left side wala variable
  this.username=username
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;
  return this
}


// const userOne=User("ali",12,true);
// console.log(userOne)

// when we use this then function override 
// const userOne=User("ali",12,true);
// const userTwo=User("usman",11,true)
// console.log(userOne)

// to prevent this override we use new keyword that protect it
const userOne=new User("ali",12,true);
const userTwo=new User("usman",11,true)
console.log(userOne)
console.log(userOne.constructor);

//1.when we use new keyword empty object create
//2.constrtuctor function call due to new keyword
//3.result is fine

//instanceof search it from google
