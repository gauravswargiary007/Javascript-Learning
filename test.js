function addition(x, y) {
    let sum = x + y
    return sum;
};
console.log(addition(10, 15));


// object is created
const user = {
    id: 1001,
    Name: "tony stark"
};
function newFunction(passingObject) {           // (passsingObject) parameter: a temporary variable that receives data from whoever calls this function.
    console.log(`hello ${passingObject.Name} your id is ${passingObject.id}`);
};

newFunction(user);                              // passing the whole user object as an argument to the function and the value will be stored by objectPassing.
// in other words as we used (x, y) in function addition and we passed the value in function call similarly we used passingObject in new function and passed the value i.e user object in function call