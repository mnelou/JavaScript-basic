// //this and arrow function in javascript and this keyword

// const user={
//     username:"ali",
//     price:999,
//     welcomeMessage:function(){// this is used to show current context refer  etc
//         console.log(`${this.username},welcome to website`);
        
//     }
// }
 
// user.welcomeMessage()
// user.username="sam"//change the above username 
// user.welcomeMessage()
// //now changes occurs 

const user={
    username:"ali",
    price:999,
    welcomeMessage:function(){// this is used to show current context refer  etc
        console.log(`${this.username},welcome to website`);
        console.log(this)

    }
}
 
user.welcomeMessage()
user.username="sam"//change the above username 
user.welcomeMessage()
   console.log(this)//print it empty 

   //arrow function 

   function chai(){
    let username="ali"
    console.log(this.username);
   }
chai()

const chais = () => {
    let username = "ali"
    console.log(username)
}
chais()

//arrow function
//basic arrow function 
//()=>{}
// hold in name
const addtwose=(num1,num2)=>{ return num1+num2;} //we can remove parenthese
//also const addtwos=(num1,num2)=> (num1+num2) //also write like that
//how to return object
const addtwos=(num1,num2)=>({username:"ali"})

console.log(addtwos(4,2));

const myarray=[4,2,5]
myarray.forEach()
