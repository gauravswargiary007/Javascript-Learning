// arrow fnction
const myFunction1 = function() {
    console.log("hello");
    console.log("welcome dom");
}
myFunction1();

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
console.log(myFunction4(9,5));