let a = 10;
let b = 7;
//arithmatic operators
console.log("arithmatic operators:  ");
console.log("a = ", a, "b = ", b);
console.log("addition of a and b is: ", a + b);
console.log("subtraction of a and b is: ", a - b);
console.log("multiplication of a and b is: ", a * b);
console.log("division of a and b is: ", a / b);
console.log("exponentiation of a and b is: ", a ** b);
console.log("modulus of a and b is: ", a % b);

// unary operatorsa
console.log("unary operators:");
console.log("a = ", a, "b = ", b);
a++;
console.log("post increment of a is: ", a);
b--;
console.log("post decrement of b is: ", b);
++a;
console.log("pre increment of a is: ", a);
--b;
console.log("pre decrement of b is: ", b);

// assignment operators
console.log("assignment operators:   ");
console.log("a equal to:  ", a = 3);
console.log("b equal to:  ", b = 5);
console.log("plus equals to a += 5:    ", a += b);
console.log("minus equals to a -= 5:    ", a -= b);
console.log("multiply equals to a *= 5:    ", a *= b);
console.log("divide equals to a /= 5:    ", a /= b);
console.log("modulus equals to a %= 5:    ", a %= b);
console.log("exponential equals to a **= 5:    ", a **= b);

// comparision operators
console.log("comparision operator:  ");
a = 42;
b = 87;
console.log("is a equal to b", a == b);
console.log("is a not equal to  b", a != b);
let Name = "gaurav";
console.log("is a equal to name", a === Name);
console.log("is a not equal to name", a !== Name);