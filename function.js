function myFunction() {
    console.log("hello world");
    console.log("the don is xingho");
}
myFunction();

// functoin with parameters and arguments
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
        console.log("plese engter username");
    } else {
        console.log(`${username} just loged in`);
    }
} login();
login("gaurav");

// passing object to function
const user = {
    userName: "gaurav",
    price: 899
}

function handelObject(anyObj) {         // function defination
    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
}

handelObject(user);
handelObject({
    userName: "sam",
    price:5755
})