// ******************************** arrow function ********************************
/*
() => {
    console.log("hello world");
};

# here the function is defined but not executed
# we didnot call the function
# and didnot stored the function in a variable
*/

let greetings = () => {                             // here arrow fuction is defined and is stored in a variable "greetings"
    console.log("WE HAVE USED ARROW FUNCTION");     // function body
}
greetings();                                        // function call


// // without using arrow function
// const myFunction1 = function() {
//     console.log("hello");
//     console.log("welcome don");
// }
// myFunction1();

// // without using arrow function 
// function myFunction1() {
//     console.log("hello");
//     console.log("welcome don");
// }
// myFunction1();


// same function1 using arrow function
const myFunction1 = () => {             // arrow function is defined and is stored in a variable "myFunction1"
    console.log("hello");               // function body  
    console.log("welcome don");         // function body
}
myFunction1();                          // function call

const myFunction2 = () => {
    let a = 5;
    let b = 3;
    console.log(a+b);
}
myFunction2();

const myFunction3 = (num1, num2) =>{
    return num1 + num2
}
console.log(myFunction3(1,5));

// implicit return -> return keyword is not used
const myFunction4 = (num1, num2) => num1 + num2
// const myFunction4 = (num1, num2) => (num1 + num2)
console.log(myFunction4(9,5));

// ******************************** Arrow Function with Objects ********************************
// const getUser = () => { name: "Tony" };          this will give us undefined as {} will be treated as function not obect in js 
// const getUser = () => { name: "Tony", age: 25 }; this will also give us an error in the syntex
const getUser = () => ({ name: "Tony", age: 25, address: "Guwahati" });     // implicit return
console.log(getUser());

// explicit return in object using arrow function
const getUser2 = () => {
    return { name: "Tony", age: 25 };
}
console.log(getUser2());


// ******************************** Arrow Function with Arrays ********************************
// map()
// const numbers = [1, 2, 3];

// const doubled = numbers.map(n => n * 2);
// console.log(doubled); // [2, 4, 6]

// filter()
// const even = numbers.filter(n => n % 2 === 0);

// reduce()
// const total = numbers.reduce((acc, n) => acc + n, 0);


// Arrow functions are heavily used with array methods.