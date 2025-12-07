// When you don't know how many arguments will be passed to a function rest(...) operator is used…

/* here we calculated the total price in a shopping cart. we see that if one value is in the chart then it is okay but if more than one value is passed then it obly prints the first value 

function calculateCart(num1) {
    return num1;
}
console.log(calculateCart(321, 234, 876));
*/

function calculateCart(...num1) {                   // here we used rest operator
    return num1;
}
console.log(calculateCart(321, 234, 876, 5467));    // gives the value in array

// this is not going to work
function calculateCart2(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCart2(321, 234, 876, 5467));

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

// ********************* passing array to function *********************

const array1 = [1, 2, 3, 4, 5, 7];          // array created
function arrayfunction1(anyArray1) {        // function defination --> parameter anyArray1 will store value when function is called
    console.log(anyArray1[2]);              // will print the second element from the array
};
arrayfunction1(array1);                     // function call --> passing the whole array1

// directly passing the array without creating extra array
function arrayfunction2(anyArray2) {        // function defination
    console.log(anyArray2[3]);
};
arrayfunction2([12, 343, 5, 876, 5432, 88, 7]);