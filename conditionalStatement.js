// simple if statement
let age = prompt("enter your age:   ");
if(age > 18) {
    console.log("you are an adult");
}

// if...else statement
let Name = prompt("enter your name: ");
if(Name == "gaurav") {
    console.log("you are the xingho");
} else {
    console.log("you are not the xingho bro");
}

// if...else if...else ladder
let marks = prompt("enter your marks");
if(marks >= 90) {
    console.log("grade A");
} else if(marks < 90 && marks >= 70) {
    console.log("grade B");
} else if(marks < 70 && marks >= 60) {
    console.log("grade C");
} else if(marks < 60 && marks >= 40) {
    console.log("grade D");
} else {
    console.log("try harder next time");
}

// switch case
let day = 5//prompt("enter day from 1 - 7: ");
switch(day) {
    case 1: 
            console.log("monday");
            break;
    case 2:
            console.log("tuesday");
            break;
    case 3: 
            console.log("wednesday");
            break;
    case 4: 
            console.log("thursday");
            break;
    case 5: 
            console.log("friday");
            break;
    case 6: 
            console.log("saturday");
            break;
    case 7: 
            console.log("sunday");
            break;
    default: 
            console.log("invalid"); 
}

// ternary operator
let Name1 = prompt("type your name: ");
let result = (Name1 == "gaurav") ? "real xingho" : "duplicate xingho";
console.log(result);

// problem
let Age = prompt("enter your age");
let isCitizen = true;
let isRegistered = true;

if (age >= 18) {
    if (isCitizen == true) {
        if (isRegistered == true) {
           console.log("elegible to vote"); 
        } else {
            console.log("not registered");
        }
    } else {
        console.log("not a citizen");
    }
} else {
    console.log("need to be 18 years");
}