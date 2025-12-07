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