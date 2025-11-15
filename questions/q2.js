let fullname = prompt("enter your full name: ");
let name_length = fullname.length;
let username = fullname.concat(name_length);
console.log("your username is: ", "@" + username);