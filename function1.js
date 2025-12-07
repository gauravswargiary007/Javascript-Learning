// Create a Function (Function Declaration)
function myFunction() {                     // function declaration
    console.log("hello world");
    console.log("the don is xingho");
}
myFunction();                               // function call

// function with parameters and arguments
function addition(x, y) {
    let sum = x + y;
    return sum;
}
const res = (addition(4, 5));
console.log(res);

// function without parameter and without arguments
function add() {
    const x = 6;
    const y = 8;
    let sum = x + y;
    console.log(sum);
}
add();

// function with parameter and without arguments
function login(username) {
    if(username === undefined) {
        console.log("please enter username");
    } else {
        console.log(`${username} just loged in`);
    }
} login();
login("gaurav");