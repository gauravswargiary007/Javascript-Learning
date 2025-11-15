// for loop
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < arr.length ; i++){
    sum = sum + arr[i];
}
console.log("sum of array: " + sum);

// while loop
let num = 5;
let factorial = 1;
let i = 1;
while(i <= 5) {
    factorial = factorial * i;
    i++;
}
console.log("factorial of 5 is : " + factorial);

// do...while loop
let x = 2;
do {
    console.log(x + "\t");
    x = x + 2;
} while(x <= 20);

//  for - of loop
const media = ["youtube", "facebook", "instagram", "whatsapp", "netflix"];
for(const m of media) {
    console.log(m);
}
let str = prompt("enter any string");
let length = 0;
for (let val of str) {
    console.log("val = " + val);
    length++;
}
console.log("string length = " + length);

//for - in loop in objects
const names = {
    yt: "youtube",
    fb: "faxcebook",
    ig: "instagram",
};

for(const key in names) {
    console.log(key);           // gives the key values
}

for(const key in names) {
    console.log(names[key]);    // gives the values of key
}

for(const key in names) {
    console.log(`key is: ${key} anthe the values are: ${names[key]}`)
}

// for in loop in array
const media2 = ["html", "css", "js", "react", "java"];
for(const key in media2) {
    console.log(key);       // gives a key value basically index
}

for(const key in media2) {
    console.log(media2[key]);   // hives the value of the keys
}
// break and continue