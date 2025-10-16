//filter map

const coding=["js","rb","java","cpp"];
const values=coding.forEach((item)=>{
    console.log(item);
})// it does not return any value except only print values
console.log(values);

const value=coding.forEach((item)=>{
return item;
})// it also does not return any value except only print values
console.log(value);


//filer operation
const myNums=[1,2,3,4,5,6,7,8,9,10];


const newNums=myNums.filter((num)=>num>4);
console.log(newNums);



const newNum=myNums.filter((num)=>{
    return num>4})// write return key word if use scope
console.log(newNum);



