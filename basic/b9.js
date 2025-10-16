//how to declare the date etc

let myDate=new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString)
console.log(myDate.toJSON())

console.log(typeof myDate);

let mycreatedDate=new Date(2029,5,22);
console.log(mycreatedDate.toDateString());

let createdDate=new Date(`01-13-2022`);
console.log(createdDate.toLocaleDateString());

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
// ${newdate.getDate()} and the time
console.log(newdate);

newdate.toLocaleDateString('defualt',{
    weekday:"long",
})

