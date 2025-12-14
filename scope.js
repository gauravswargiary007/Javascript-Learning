// global scope
let globalVariable = "i am global variable";        // declared outside any function
function test() {
    console.log(globalVariable);                    // Accessible anywhere in the code.
}
test();
console.log(globalVariable);


// function scope or local variable
function myFunction() {
    let funcVar = "this is function variable";
    console.log(funcVar);                           // only accessible within the scope of the function
}
myFunction();
// console.log(funcVar);                            // not accessible from outside the function


//  block scope
{
    let blockVar = "Inside block";
    const blockConst = "Also inside block";

    console.log(blockVar);
    console.log(blockConst);
}

// nested scope                             child function can access the variable of parent function
function parent() {                         // parent function
    const username = "tony stark"

    function child() {                      // child function
        const website = "avenger"
        console.log(username, website);     // child function is accessing the variable of parent function since parent function is globle for the child
    }
    // console.log(website);                // variable of child function only accessible by the child parent
    child();                                // child function call
}
parent();                                   // parent functoin call 

// ********************************** MINI HOISTING **********************************
console.log(addOne(5));             // memory is created then the execution is happend
function addOne(num1) {             // Function Declaration ✅ (Fully Hoisted)
    return num1 + 1;
}


console.log(addTwo(5));             // error occures Cannot access 'addTwo' before initialization
const addTwo = function(num2) {
    return num2 + 2;
}