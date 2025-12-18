function greet() {
    console.log("DB CONNECTED");
}
greet();

// named IIFE
(function greet() {
    console.log("DB CONNECTED");
}) ();

// IIFE with arrow function
( () => {
    console.log("arrow function using IIFE");
}) ();

// IIFE With Parameters
(function add(a, b) {
    console.log(a + b);
}) (10, 20);

((a, b) => {
    console.log(a+b)
}) (20, 66);

((Name) => {
    console.log(`hello ${Name}`)
}) ("Gaurav");