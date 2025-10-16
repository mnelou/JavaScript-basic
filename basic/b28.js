const coding=["js","rb","java","cpp"];
//forEach =>callbackfn
// conding.forEach(function name(){
    
// })

//we can call it as item also
coding.forEach(function (item){
console.log(item);
})


// arrow function
coding.forEach((item)=>{
    console.log(item);

})

function printme(item){
    console.log(item);
}

coding.forEach(printme);


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const mycoding=[{
    languageName:"javascript",
    languagefile:"js"
},
{
    languageName:"python",
    languagefile:"py"
},{
    languageName:"java",
    languagefile:"java"
}];

mycoding.forEach((item)=>{
    console.log(item.languageName);
})