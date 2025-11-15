//  find average from an array

let marks = [25, 67, 89, 77, 76, 93];
let sum = 0;
console.log("marks obtained by the class:   ");
for (let val of marks) {
    console.log(val);
    sum = sum + val;
}
let avg = sum/marks.length;
console.log("average marks obtain by the class: ", avg);