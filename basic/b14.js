// de-structuring of object

const course={
    coursename:"js in urdu",
    price:"999",
    courseInstructor:"hitech"
}

//course.courseInstructor
const {courseInstructor: simplename}=course

const {courseInstructor}=course
console.log(courseInstructor);
console.log(simplename);
/**Instead of writing long property access like this:
console.log(course.courseInstructor);
you can directly "unpack" the property from the object into a variable using destructuring:
const { courseInstructor } = course;
Now you can just write:
console.log(courseInstructor);
Feature	Description	Example
Destructuring	Extracts properties from objects	const {x, y} = obj
Rename variable	Give new variable name	const {x: newX} = obj
Default value	Provide default if missing	const {x = 10} = obj
 * 
 */

// what is the json API : is a object type but it has no name of object only {  } inside this
//  only keys and value also in array