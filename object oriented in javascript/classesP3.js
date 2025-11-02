class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`username:${this.username}`);
  }
  //the static keyword is used to make it private and do not give access
  static createId(){
    return `123`
  }
}

// const nauman=new User("nauman")
// console.log(nauman.createId());

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
    
  }
}
const iphone=new Teacher("iphone","i@gmail.com")
iphone.logMe();
console.log(iphone.createId());