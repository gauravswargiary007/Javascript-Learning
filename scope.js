// global scope
let globalVariable = "i am global variable";    // declared outside any function
function test() {
    console.log(globalVariable);        // accessible within the function
}
test();


// function scope or local variable
function myFunction() {
    let funcVar = "this is function variable";
    console.log(funcVar);       // only accessible within the scope of the function
}
myFunction();
// console.log(funcVar);           // not accessible from outside the function


//  block scope
{
    let blockVar = "Inside block";
    const blockConst = "Also inside block";

    console.log(blockVar);
    console.log(blockConst);
}