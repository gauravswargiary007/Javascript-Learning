// objects

//  creating an Object using object literals
const sym = Symbol["wolf"];
const person = {
    name: "jon snow",
    [sym]: "wolf",
    email: "got@gmail.com",
    address: "castelblack",
    age: 25,
    job: "lord commender"
};

// accessing the object
console.log(person.name);           // using the dot operator
console.log(person["email"]);       // using the bracket notation
console.log(person[sym]);
console.log(typeof [sym]);
console.log(person);
person.address = "king landing";
console.log(person.address)


// creating an object uing new object

const user = new Object();
user.name = "tony stark";
user.email = "stark@gmail.com";
user.address = "new york";
user.age = 40;
user.job = "avengers";

console.log(user);

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

