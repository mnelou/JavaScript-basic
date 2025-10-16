// comparision of condition inside
console.log(2>3); //print true or false because it is int condition form as you consider in c++
console.log(2>=3);//false
console.log(2<3);//true
console.log(2<=3);//true

// in case of null comparision
console.log(null>0);//print false
console.log(null>=0);//print true when we say null is equal or greater then zero
console.log(null==0);//print false

/* null == 0 → false
Reason:
When we use the equality operator (==),
JavaScript uses different conversion rules — not the same as numeric comparison.
 👉 null is only equal to undefined — nothing else!
 so: null == 0  // false
null == undefined  // true 
Because null means “no value”, not “zero value”. 
*/

console.log(null<=0);//print true

/*special case 
The triple equal (===) in JavaScript is called the “strict equality operator.”
=== checks both:
1.Value ✅
2.Data type ✅
If both match, it returns true.
If either value or type is different, it returns false.
*/
console.log("2"===2);

//NOTE: avoid these comparsion and use clean code