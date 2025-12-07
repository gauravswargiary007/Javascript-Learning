// Create a Function (Function Declaration)

function myFunction() {                     // function declaration
    console.log("hello world");
    console.log("the don is xingho");
}
myFunction();                               // function call

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
        console.log("please enter username");
    } else {
        console.log(`${username} just loged in`);
    }
} login();
login("gaurav");

// ********************* passing object to function *********************

const user = {                                          // object created
    userName: "Tony Stark",
    price: 899
}
function handelObject(anyObjectName) {                  // function defination(anyObjectName) parameter: a temporary variable that receives data from whoever calls this function handlObject.
    console.log(`username is ${anyObjectName.userName} and price is ${anyObjectName.price}`);
}
handelObject(user);                                       // function call --> passing the whole user object as an argument to the function and the value will be stored by anyObjectName.

// as we used (x, y) in addition function and we passed the value in function call similarly we used anyObjectName in handleObjet function and passed the value i.e user object in function call

// directly passing the object without creating extra object
function newObject(storingValueObject) {
    console.log(`hello ${storingValueObject.Name} your address is ${storingValueObject.address}`);
};
newObject({
    Name: "Steve Rogers",
    address: "guwahati"
});