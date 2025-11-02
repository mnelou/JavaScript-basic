class User{
  constructor(email,password){
    this.email=email;
    this.password=password
  }
  get password(){
    return this._password.toUpperCase()
  }
  set password(value){
    this._password=value.toUpperCase()
  }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value.toUpperCase()
  }
  
}

const nauman=new User("n@nauman.ai","123")
console.log(nauman.password);
console.log(nauman.email);



// in old era 
function User(email,password){
  this._email=email
  this._password=password
  Object.defineProperty(this,'email',{
    get:function(){
      return this._email.toUpperCase()
    },
    set:function(value){
      this.email=value
    }
    
  })
}