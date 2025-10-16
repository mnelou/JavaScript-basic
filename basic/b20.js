//Immediately Invoked function expressions (IIFE)
function hai(){
        console.log("`ob kd conkdknected")
}
hai();

(function chis() {
    console.log("ob connected");
})();

// chis()
//we use parenthese to make this function protected from outside scope 
//globle scope sy pollution hoti kaebar ussy bachny kyly ky hai IIFE use krty hai
//first () function defination =>When you wrap a function in parentheses, it becomes a function 
// expression instead of a normal function declaration.write and second () execution
//  call hai=>he final () calls the function immediately after defining it.


//how to write function in arrow function semicolum also cause problem so put it at the end tg
(function aurcode(){
    console.log(`helow g`);
})(); //this is named IIFE
// arrow function
(()=>{
    console.log(`helow g`);
})(); //without name IIFE

//pass argument IIFE
((name)=>{
    console.log(`helow g ${name}`);
})("ali"); 
