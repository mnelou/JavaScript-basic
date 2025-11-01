    const promiseOne=new Promise(function(resolve,reject){
// Do an asyn task
//DB calls,cryptography,network 
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})
//to hold in variable is not required
new Promise(function(resolve ,reject){
  setTimeout(function(){
    console.log("async task 2");
    resolve()
    
  },1000)
}).then(function(){
  console.log("async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({
      username:"chai ",email:"chai@example."
    });
  },1000)
})
promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let error = true;  // Change to false to test success
    if (!error) {
      resolve({ username: "ali", password: "132" });
    } else {
      reject('ERROR: Something went wrong');
    }
  }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function(error) {
    console.log(error);
  }).finally(()=>console.log("The promise either resolved or rejected"))
  
  const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let error = true; // Change to false to test success
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject('ERROR: JS went wrong');
    }
  }, 1000);
});
    
// async function consumePromisefive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("The promiseFive is settled");
//   }
// }
  
//   consumePromisefive()
  
//   async function getAlUsers(){
// try{    const response=await fetch("https://jsonplaceholder.typicode.com/users")
// const data=response.json()
// console.log(data);
// }
// catch(error){
//   console.log("E: ",error);
// }
//   }
//   getAlUsers()
//alternative of above
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))