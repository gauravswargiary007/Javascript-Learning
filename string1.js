let str1 = "tony stark";        // creating string with ""
let str2 = `avengers`;          // creating string with ``

console.log(str1);
console.log(typeof "str1");

console.log(str2);
console.log(typeof "str2");

//  properties in strings

// str.length to count the length of string
console.log(str1.length);   
console.log(str2.length);

// str[index] to acces the specific index
console.log(str1[3]);       
console.log(str2[7]);

// templet literals
const object = {
    item: "pen",
    price: 10,
};

let str = `the cost of ${object.item} is ${object.price} rupees`;       // using literals ${variable.key}
console.log(str);

// string concatination
console.log(str1 + " " + str2); // using +
console.log(`${str1} ${str2}`);