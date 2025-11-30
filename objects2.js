const user = {
    name: "TONY STARK",
    job: "Avenger",
    address: "New York"
}

// creating a function inside object
user.greeting = function(){                         // we have used the 'user' function and then we have created a function inside the 'user' object named 'greeting'
    console.log("hello js user");
    console.log(`hello js user ${this.name}`);
}
user.greeting();                                    // function call
// console.log(user.greeting());                    // same --> function call

const exampleObject = {
    e1: "abcd",
    e2: "efgh",
    exampleFunction() {
        console.log(`combining both the keys: ${this.e1}${this.e2}`);
    }
}
console.log(exampleObject);         // prints e1 and e2 and the function as it is not the values inside the function
exampleObject.exampleFunction();    // now FUNCTION IS CALLED here, this will print the values inside the function

// creating an object inside object
const regular = {                           // object is created named 'regular'
    email:  "regular@gmail.com",
    fullname: {                             // anotgher object is created named 'fullname' inside the object 'regular'
        firstname: "tony",
        lastname: "stark"  
    }
}
console.log(regular);                       // prints the whole object
console.log(regular.fullname);              // prints the object "fullname" inside the object regular
console.log(regular.fullname.lastname);     // prints the lastname inside the object fullname
