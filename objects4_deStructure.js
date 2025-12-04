const course = {
    course_name: "javascript",
    price: 999,
    instructor: "john Wick"
}
// with de-structure                                    // const {key1, key2, ...} = object_name;
const {course_name, instructor} = course;       
console.log(course_name, instructor);

// Renaming Variables While Destructuring               // const {key1: newName1, key2:newName2, ...} = object_name;
const {course_name: Name, instructor: ins} = course;
console.log(Name, ins);

/* without de-structure
console.log(course.course_name, instructor);
course.course_name = Name;
course.instructore = ins;
console.log(Name, ins);
*/