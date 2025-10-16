// // loop alternative name is iterator or iteration
// //for loop 
// // declaration 

// // for (let index = 0; index < array.length; index++) {
//    // const element = array[index];
    
// //}
// /*
// const array=[4,2,5,6,13,5];
// for(let i=0;i<array.length;i++){
//     console.log(`outer loop value:${i}`);
//     for(let j=3;j<array.length;j++){
//     console.log(`inner loop value:${j}  and inner loop${i}`);
// }

// }
// */


for (let index = 1; index <=20; index++) {
    if(index==4){
        console.log(`Detected ${index}`)
        break// where condition meet then loop will break
    }
    console.log(`value of i is ${index}`)
}
for (let index = 1; index <=20; index++) {
    if(index==4){
        console.log(`Detected ${index}`)
        continue// where condition meet then this will skip in 
        // loop and print anything inside the condition
    }
    console.log(`value of i is ${index}`)
}
