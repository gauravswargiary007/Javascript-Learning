//  creating an Object using object literals
const person = {
    name: "jon snow",
    email: "got@gmail.com",
    address: "castelblack",
    age: 25,
    job: "lord commender"
};
console.log(person);

// accessing the object

// 1. using the dot operator
console.log(person.name);           
console.log(person.email);    
console.log(person.address);
console.log(person.age);
console.log(person.job);
// changing value using '.' operator
person.address = "king's landing"
console.log(person.address);

// 2. using the bracket notation it is used if we declare the key as string inside the object tough key is considered as string inside object
const person2 = {
    "full name": "Captain America",     // now "full name" is impossible to access through '.' operator
    "job": "Avengers",                  // now "job" is accesseble using both '.' and 'bracket notation'
    address: "Newyork"
};
// console.log(person2."full name");    will give error as we cannot acces this using '.' operator
console.log(person2["full name"]);      // will need this bracket notation to access
console.log(person2["job"]);
console.log(person2.job);               // even tough job is described as "job" it is accessible bby '.' operator and 'bracket notation'
console.log(person2.address);
console.log(person2["address"]);        // even tough address is not described as "address" in objectr it is accessible using '.' and bracket notation

// changing value using 'bracket notation' operator
person["full name"] = "TONY STARK"
console.log(person["full name"]);


// symbol as a key in object
const mysym = Symbol["key1"];
const animal = {
    [mysym]: "wolf"
};
console.log(animal[mysym]);
console.log(typeof animal.mysym);
//[sym]: "wolf",
//console.log(person[sym]);


// creating an object uing new object
const user = new Object();
user.name = "tony stark";
user.email = "stark@gmail.com";
user.address = "new york";
user.age = 40;
user.job = "avengers";
console.log(user);

// creating a function inside object
user.greeting = function(){
    console.log("hello js user");
    console.log(`hello js user ${this.name}`);
}
console.log(user.greeting());

// creating an object inside object
const regular = {
    email:  "regular@gmail.com",
    fullname: {
        firstname: "tony",
        lastname: "stark"  
    }
}
console.log(regular);
console.log(regular.fullname);
console.log(regular.fullname.lastname);

