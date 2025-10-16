// function 
function calculatecartPrice(num1){
    return num1
}

console.log(calculatecartPrice(23,52))// here we use rest operator 
// for unlimited agrument that are passing in the function call

function calculatecartPrices(...num1){
    return num1
}

console.log(calculatecartPrices(23,52))

function calculatecart(value1,value3,...num1){
    return [value1,value3,...num1]
}

console.log(calculatecart(32,14,52,31,1))


//user object make

const user={
    username:"ali",
    price:12
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and 
        price is ${anyobject.price}`)
}

handleObject(user)
handleObject({username:"ali",price:423})

// arrays pass also like that

const muNewArray=[33,244,55,22]
function returnSecondValue(getArray){
    return getArray// also we can use index like getArray[2]
}
console.log(returnSecondValue(muNewArray))