let value = 3;
let negvalue = -value;
console.log([value, negvalue]);

// Operation
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);        // power
console.log(2 / 2);
console.log(7 % 5);

// 1. Implicit Conversion to String. Occurs when you use the + operator with a string.
console.log("1" + 2);       // "text" + value = value --> string
console.log(1 + "2");       // value + "text" = value --> string
console.log("1" + 2 + 2);   // "text" + value + value --> string (after the "text" the values will not be added it will all converted to string)   
console.log(1 + 2 + "2");   // value + value + "text" --> string (before the "text" the values will be added and then converted to string)


// 2. Implicit Conversion to Number. Happens when operators expect numbers: -, *, /, %, comparison operators.
console.log("5" - 2);
console.log("5" - "2");
console.log(2 - "5");
console.log("5" * 2);
console.log("5" * "2");
console.log(5 * "2");
console.log("5" / 2);
console.log("5" / "2");
console.log(5 / "2");
console.log("5" % 2);
console.log("5" % "2");
console.log(5 % "2");
console.log("abc" - 1);  // NaN (string cannot convert to number)
// NB: JS converts "value" to number if -, *, /, %, comparison operators used. and string cannot convert to number


// 3. Implicit Conversion to Boolean. This happens when a value is used in a boolean context:
// In if statements
if ("") console.log("Yes"); // Won’t run → "" is false
if ("hello") console.log("Yes"); // Runs → "hello" is true

// In logical operators
console.log(0 || "Hello"); // "Hello"  (0 becomes false)
console.log(1 && "Hi");    // "Hi"     (1 becomes true)