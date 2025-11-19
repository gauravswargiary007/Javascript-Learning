console.log("Data Types in java Script");

let num = 2453;
let big = BigInt("222222222222636366363611882799823653");
let String = "Xingho";
let boolean1 = "true";
let boolean2 = "false"
let z;  // will give undefined: A variable that is declared but not assigned a value is undefined.
let x = null;   
let sym = Symbol("hello!");

const objectStudent = {
    name: "tony stark",
    age: 25,
    class: 3,
    major: "MCA",
    roll_no: 3000,
};

console.table([num, big, String, boolean1, boolean2, z, x, sym]);
console.log(objectStudent);

console.log(typeof 2453);
console.log(typeof 222222222222636366363611882799823653);
console.log(typeof "Xingho");
console.log(typeof true);
console.log(typeof false);
console.log(typeof z);
console.log(typeof x);
console.log(typeof sym);
console.log(typeof objectStudent);