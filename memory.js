//**************** WORKING IN STACK MEMORY*******************

let Name = "gaurav";                // Name gaurav is assigned in stack directly
let Name2 = "xingho";               // Name2 xingho is assigned in stack directly
console.log(Name, Name2);

Name2 = Name;                       // copying the value of Name to Name2
console.log(Name2);

Name2 = "Don";                      // This replaces only Name2's value in stack.             
console.log(Name, Name2);

//**************** WORKING IN HEAP MEMORY*******************

let user1 = {                       // user1 is stored in stack referencing to the object
    email: "user1@gmail.com",       // email and ph are stored in heap 
    ph: 2345678909
}

let user2 = user1;                  // user2 is stored in stack but it is referencing to the same object in heap
console.log(user1);
console.log(user2);

user2.email = "newemail@gmail.com"; // using the second variable we updated the email which has also effected the first variable Since both point to the same heap object, the update affects the shared object.
console.log(user1.email);
console.log(user2.email);