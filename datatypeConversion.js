let score1 = 33;    
console.log("type of score1: " + typeof score1);                    // number datatype

let score2 = "33";
console.log("type of score2: " + typeof score2);                    // string datatype

let valueInNumber1 = Number(score2);                                // this guarentes that the datatype of score2 which is string will be number
console.log("type of valueInNumber1: " + typeof valueInNumber1);    // number datatype
console.log(valueInNumber1);                                        // 33 will be shown

// conversion to Number
// string to number --> NaN
let score3 = "77abc";
console.log("type of score3: " + typeof score3);                    // string datatype
let valueInNumber2 = Number(score3);                                // this guarentes that the datatype of score3 which is a string will be number
console.log("type of valueInNumber2: " + typeof valueInNumber2);    // datatype will be Number
console.log(valueInNumber2);                                        // NaN i.e not a number as the value is string but we converted it to number

// null to number --> 0
let score4 = null;                                                  
console.log("typeof score4: " + typeof score4);                     // object datatype
let valueInNumber3 = Number(score4)                                 // this guarentes that the datatype of score2 which is string will be number
console.log("type of valueInNumber3: " + typeof valueInNumber3);    // number datatype
console.log(valueInNumber3);                                        // 0

// undefined to number --> NaN
let score5 = undefined;
console.log("typeof score5: " + typeof score5);                     // undefined datatype
let valueInNumber4 = Number(score5)                                 // this guarentes that the datatype of score2 which is string will be number
console.log("type of valueInNumber4: " + typeof valueInNumber4);    // number datatype
console.log(valueInNumber4);                                        // NaN as the value is undefined and we converted it to number

// boolean to number --> 1 or 0
let score6 = true;
console.log("typeof score6: " + typeof score6);                     // boolean datatype
let valueInNumber5 = Number(score6)                                 // this guarentes that the datatype of score2 which is string will be number
console.log("type of valueInNumber5: " + typeof valueInNumber5);    // number datatype
console.log(valueInNumber5);                                        // 1 as true will be 0 if false

// number is easily converted
// "33abc" => gives NaN
// "true" => coverts to 1; "false" => 0


// conversion to Boolean
let isLoggedIn1 = 1;
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);                               // this guarentes that the datatype of isLoggedIn1 will be boolean
console.log(booleanIsLoggedIn1);                                             // true
console.log("type of BooleanIsLoggedIn1: " + typeof booleanIsLoggedIn1);     // boolean

let isLoggedIn2 = 0;
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);                               // this guarentes that the datatype of isLoggedIn2 will be boolean
console.log(booleanIsLoggedIn2);                                             // False
console.log("type of BooleanIsLoggedIn2: " + typeof booleanIsLoggedIn2);     // boolean

// if empty to boolean --> false
let isLoggedIn3 = "";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);                               // this guarentes that the datatype of isLoggedIn3 will be boolean
console.log(booleanIsLoggedIn3);                                             // false
console.log("type of BooleanIsLoggedIn3: " + typeof booleanIsLoggedIn3);     // boolean

// if string to boolean --> true
let isLoggedIn4 = "gaurav";
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);                               // this guarentes that the datatype of isLoggedIn4 will be boolean
console.log(booleanIsLoggedIn4);                                             // true
console.log("type of BooleanIsLoggedIn4: " + typeof booleanIsLoggedIn4);     // boolean

// null to boolean --> false
let isLoggedIn5 = null;
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);                               // this guarentes that the datatype of isLoggedIn5 will be boolean
console.log(booleanIsLoggedIn5);                                             // false
console.log("type of BooleanIsLoggedIn5: " + typeof booleanIsLoggedIn5);     // boolean

let isLoggedIn6 = undefined;
let booleanIsLoggedIn6 = Boolean(isLoggedIn6);                               // this guarentes that the datatype of isLoggedIn5 will be boolean
console.log(booleanIsLoggedIn6);                                             // false
console.log("type of BooleanIsLoggedIn6: " + typeof booleanIsLoggedIn6);     // boolean

// 1 => true, 0 => false
// "" => false
// "string" = true


// conversion to String
let someNumber = 76;
let stringNumber = String(someNumber)                                       // this guarentes that the datatype of someNmber will be String
console.log(stringNumber);                                                  // 76 but string    
console.log("type of stringNumber: " + typeof stringNumber);                // String

let someNumber2 = "";
let stringNumber2 = String(someNumber2)                                     // this guarentes that the datatype of someNmber will be String
console.log(stringNumber2);                                                 // 76 but string    
console.log("type of stringNumber2: " + typeof stringNumber2);              // String


// operations

// let str1 = "abcd";
// let str2 = "efgh";



// data and time

// let myDate = new Date();    // object of date is created
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// functions


